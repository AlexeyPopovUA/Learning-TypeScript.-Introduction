interface NamedEntity {
    id: Number;
    name: String;
    age?: Number;
}

function doSmthWithEntity (entity : NamedEntity) : String {
    return entity.name;
}

console.log(doSmthWithEntity({
    name: "Test",
    id: 123
}));

console.log(doSmthWithEntity({
    name: "Test2",
    id: 321,
    age: 18
}));

