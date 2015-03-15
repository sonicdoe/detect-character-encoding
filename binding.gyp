{
	"targets": [
		{
			"target_name": "icuWrapper",
			"sources": ["icuWrapper.cpp"],
			"include_dirs": [
				"<!(node -e \"require('nan')\")"
			],
			"dependencies": [
				"vendor/icu/icu.gyp:icui18n"
			]
		}
	]
}
