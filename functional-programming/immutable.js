let rooms = ["H1", "H2", "H3"];
let newRooms = rooms.map(rm => {
    if (rm === "H3") {
        return "H4";
    }
    else {
        return rm;
    }
});
console.log(rooms);
console.log(newRooms);
