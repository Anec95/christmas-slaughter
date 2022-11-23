let array = ["ciao", "bella", "..."];



for (let i = 0; i < array.length; i++)
{
    if (array[i] === "...") {
        array[i] = "apple"
        break;
    }
}