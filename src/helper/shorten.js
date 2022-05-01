export const shorten = (title) => {
const splitedName = title.split(" ");
const newName = `${splitedName[0]} ${splitedName[1]}`;

 return newName;

}