# Protobufs for Global, Game, and Player state
Protobuf messages for Global, Game and Player states for the SDK to use. This will provide a common language for the SDK to communicate with the server, and ensure maintainability and consistency for the events being passed.

# Todo
- [ ] Linter
- [ ] Tests for Typescript protobufs
- [ ] Tests for Python protobufs
- [ ] Example usage for Typescript
- [ ] Example usage for Python
- [ ] Resolve linking deps for typescript (@protos vs. ../../../protos)
- [ ] Validate multiplayer scenario with server-based conflict resolution
- [ ] Validate MMO scenario
- [ ] Validate Player scenario
- [ ] Update example links to @bufbuilder for proper builds/testing

## Hashing/Checksum on Events
Prevent event manipulation of game events by hashing the events and storing the hash in the game state. This will allow the SDK to verify the integrity of the events being passed. More details to be added here.
- Define the hashing algorithm
- Define the checksum algorithm
- Define the hashing and checksum process

## Mitigations of Event Manipulation
- Rate limiting
- Event validation (e.g. protobuf schema validation)
- Event integrity (e.g. hashing/checksum)

## Formatting
- lower_snake_case for file names
- deprecate fields only
- double-quote strings

# Standard Attribute Schema
Reasoning for using the attribute paradigm for the player state.
- Flexibility (e.g. adding new attributes)
- Extensibility (e.g. adding new attribute types)
- Maintainability (e.g. deprecating attributes)

## Example Protobufs for Attributes
Player Message
```
message Player {
  map <string, PlayerAttribute> attributes = 1;
}
```
PlayerAttribute Message
```
message PlayerAttribute {
  oneof value {
    string string_value = 2;
    int32 int_value = 3;
    float float_value = 4;
    bool bool_value = 5;
  }
}
```