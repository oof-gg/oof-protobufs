# TypeScript Protocol Buffers
This repository contains the [Protocol Buffers](https://developers.google.com/protocol-buffers) for oof.gg SDK. The protobufs are used to define the messages that are passed between the SDK and the server. This will provide a common language for the SDK to communicate with the server, and ensure maintainability and consistency for the events being passed.

# Usage
To use the protos in your project, you can import @oof-gg/protobuf-ts from npm. The package contains the compiled TypeScript files for the protobufs.

```bash
npm install @oof-gg/protobuf-ts
```

# Development
To use the protos in your TypeScript project:
```
import { GlobalEvent, GlobalEvent_EventType, GlobalEvent_EventAttribute } from '@oof-gg/protobuf-ts/global/event';
```

# More Information
For a full list of available messages, see the [protobufs](https://github.com/oof-gg/oof-protobufs/blob/main/generated/docs/docs.md) documentation on Github.