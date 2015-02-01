#include <node.h>
#include <nan.h>

NAN_METHOD(DetectCharacterEncoding) {
}

void Init(v8::Handle<v8::Object> exports) {
	exports->Set(NanNew<v8::String>("detectCharacterEncoding"),
		NanNew<v8::FunctionTemplate>(DetectCharacterEncoding)->GetFunction());
}

NODE_MODULE(icuWrapper, Init);
