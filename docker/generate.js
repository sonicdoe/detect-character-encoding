#!/usr/bin/env node
'use strict';

const fs = require('fs-extra');
const dockerfileTemplate = require('dockerfile-template');
const yaml = require('js-yaml');

/* eslint-disable key-spacing */
const environments = [
	{os: 'ubuntu', osVersion: '18.04', nodeVersion: '12'},
	{os: 'ubuntu', osVersion: '18.04', nodeVersion: '10'},
	{os: 'ubuntu', osVersion: '18.04', nodeVersion:  '8'},
	{os: 'ubuntu', osVersion: '18.04', nodeVersion:  '6'},
	{os: 'ubuntu', osVersion: '16.04', nodeVersion: '12'},
	{os: 'ubuntu', osVersion: '16.04', nodeVersion: '10'},
	{os: 'ubuntu', osVersion: '16.04', nodeVersion:  '8'},
	{os: 'ubuntu', osVersion: '16.04', nodeVersion:  '6'},
	{os: 'debian', osVersion:     '9', nodeVersion: '12', dockerTag: '10-stretch'},
	{os: 'debian', osVersion:     '9', nodeVersion: '10', dockerTag: '10-stretch'},
	{os: 'debian', osVersion:     '9', nodeVersion:  '8', dockerTag:  '8-stretch'},
	{os: 'debian', osVersion:     '9', nodeVersion:  '6', dockerTag:  '6-stretch'},
	{os: 'debian', osVersion:     '8', nodeVersion: '12', dockerTag:  '10-jessie'},
	{os: 'debian', osVersion:     '8', nodeVersion: '10', dockerTag:  '10-jessie'},
	{os: 'debian', osVersion:     '8', nodeVersion:  '8', dockerTag:   '8-jessie'},
	{os: 'debian', osVersion:     '8', nodeVersion:  '6', dockerTag:   '6-jessie'}
];
/* eslint-enable key-spacing */

const generateDockerfiles = async () => {
	const templates = {
		ubuntu: await fs.readFile(`${__dirname}/templates/ubuntu/Dockerfile`, 'utf8'),
		debian: await fs.readFile(`${__dirname}/templates/debian/Dockerfile`, 'utf8')
	};

	const promises = environments.map(environment => {
		const {os, osVersion, nodeVersion, dockerTag} = environment;
		const variables = {TAG: (dockerTag || osVersion), NODE_VERSION: nodeVersion};

		const dockerfile = dockerfileTemplate.process(templates[os], variables);
		const dockerfilePath = `${__dirname}/${os}-${osVersion}/node-v${nodeVersion}/Dockerfile`;

		return fs.outputFile(dockerfilePath, dockerfile);
	});

	return Promise.all(promises);
};

const generateComposeFile = () => {
	const composeFile = {
		version: '3',
		services: environments.reduce((services, environment) => {
			const {os, osVersion, nodeVersion} = environment;

			services[`${os}-${osVersion}-node-v${nodeVersion}`] = {
				build: {
					context: '.',
					dockerfile: `docker/${os}-${osVersion}/node-v${nodeVersion}/Dockerfile`
				}
			};

			return services;
		}, {})
	};

	return fs.writeFile(`${__dirname}/../docker-compose.yml`, yaml.safeDump(composeFile));
};

Promise.all([
	generateDockerfiles(),
	generateComposeFile()
]);
