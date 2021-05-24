const GetPokemonType = async(type, array) => {
    if (type === 'All') return array;
    let newArray = await array.filter((el, i) =>
        el.Types.length ?
        el.Types[0].name === type ?
        true :
        el.Types.length > 1 ?
        el.Types[1].name === type ?
        true :
        false :
        false :
        false
    );
    return newArray;
};
module.exports = GetPokemonType