#include <node.h>
#include <nan.h>

#include <unicode/ucsdet.h>

NAN_METHOD(DetectCharacterEncoding) {
	Nan::HandleScope scope;

	v8::Local<v8::Object> inputBuffer = info[0]->ToObject();

	UCharsetDetector *charsetDetector;
	const UCharsetMatch *charsetMatch;
	UErrorCode errorCode = U_ZERO_ERROR;

	charsetDetector = ucsdet_open(&errorCode);

	if(U_FAILURE(errorCode)) {
		Nan::ThrowError("Failed to open ICU charset detector.");
		return;
	}

	ucsdet_setText(
		charsetDetector,
		node::Buffer::Data(inputBuffer),
		node::Buffer::Length(inputBuffer),
		&errorCode
	);

	if(U_FAILURE(errorCode)) {
		Nan::ThrowError("Failed to set ICU charset detector’s text.");
		ucsdet_close(charsetDetector);
		return;
	}

	charsetMatch = ucsdet_detect(charsetDetector, &errorCode);

	if(U_FAILURE(errorCode)) {
		Nan::ThrowError("Failed to detect charset.");
		ucsdet_close(charsetDetector);
		return;
	}

	if(charsetMatch == NULL) {
		info.GetReturnValue().Set(Nan::Null());
		ucsdet_close(charsetDetector);
		return;
	}

	const char *charsetName = ucsdet_getName(charsetMatch, &errorCode);

	if(U_FAILURE(errorCode)) {
		Nan::ThrowError("Failed to get name from charset match.");
		ucsdet_close(charsetDetector);
		return;
	}

	int32_t confidence = ucsdet_getConfidence(charsetMatch, &errorCode);

	if(U_FAILURE(errorCode)) {
		Nan::ThrowError("Failed to get confidence from charset match.");
		ucsdet_close(charsetDetector);
		return;
	}

	v8::Local<v8::Object> obj = Nan::New<v8::Object>();
	obj->Set(Nan::New<v8::String>("encoding").ToLocalChecked(), Nan::New<v8::String>(charsetName).ToLocalChecked());
	obj->Set(Nan::New<v8::String>("confidence").ToLocalChecked(), Nan::New<v8::Number>(confidence));

	info.GetReturnValue().Set(obj);
	ucsdet_close(charsetDetector);
}

void Init(v8::Local<v8::Object> exports) {
	exports->Set(Nan::New<v8::String>("detectCharacterEncoding").ToLocalChecked(),
		Nan::New<v8::FunctionTemplate>(DetectCharacterEncoding)->GetFunction());
}

NODE_MODULE(icuWrapper, Init);
