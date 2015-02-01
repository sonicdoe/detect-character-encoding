{
	"targets": [
		{
			"target_name": "icuWrapper",
			"sources": ["icuWrapper.cpp"],
			"include_dirs": [
				"<!(node -e \"require('nan')\")"
			]
		}
	]
}
