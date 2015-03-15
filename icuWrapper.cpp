#include <node.h>
#include <nan.h>

#include <unicode/ucsdet.h>

NAN_METHOD(DetectCharacterEncoding) {
	NanScope();

	v8::Local<v8::Object> inputBuffer = args[0]->ToObject();

	UCharsetDetector *charsetDetector;
	const UCharsetMatch *charsetMatch;
	UErrorCode errorCode = U_ZERO_ERROR;

	charsetDetector = ucsdet_open(&errorCode);

	if(U_FAILURE(errorCode)) {
		NanThrowError("Failed to open ICU charset detector.");
	}

	ucsdet_setText(
		charsetDetector,
		node::Buffer::Data(inputBuffer),
		node::Buffer::Length(inputBuffer),
		&errorCode
	);

	if(U_FAILURE(errorCode)) {
		NanThrowError("Failed to set ICU charset detector’s text.");
	}

	charsetMatch = ucsdet_detect(charsetDetector, &errorCode);

	if(U_FAILURE(errorCode)) {
		NanThrowError("Failed to detect charset.");
	}

	const char *charsetName = ucsdet_getName(charsetMatch, &errorCode);

	if(U_FAILURE(errorCode)) {
		NanThrowError("Failed to get name from charset match.");
	}

	int32_t confidence = ucsdet_getConfidence(charsetMatch, &errorCode);

	if(U_FAILURE(errorCode)) {
		NanThrowError("Failed to get confidence from charset match.");
	}

	v8::Local<v8::Object> obj = NanNew<v8::Object>();
	obj->Set(NanNew<v8::String>("encoding"), NanNew<v8::String>(charsetName));
	obj->Set(NanNew<v8::String>("confidence"), NanNew<v8::Number>(confidence));

	NanReturnValue(obj);
}

void Init(v8::Handle<v8::Object> exports) {
	exports->Set(NanNew<v8::String>("detectCharacterEncoding"),
		NanNew<v8::FunctionTemplate>(DetectCharacterEncoding)->GetFunction());
}

NODE_MODULE(icuWrapper, Init);
