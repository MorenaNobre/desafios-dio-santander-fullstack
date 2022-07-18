function getAdmins(map) {
  let admins = [];

  for ([key, value] of map) {
    if (value === "Admin") {
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set("Luis", "Admin");
usuarios.set("Raquel", "Admin");
usuarios.set("Valdo", "User");
usuarios.set("Nilda", "Admin");

console.log(getAdmins(usuarios));