function styler(pokemon, style){
    switch(pokemon) {
        case 'normal':
          style.current = 'grid grid-cols-2 bg-[#D5A45A] shadow-lg rounded-xl p-3 text-xs sm:text-base';
          break;
        case 'grass':
          style.current = 'grid grid-cols-2 bg-[#62D5B4] shadow-lg rounded-xl p-3 text-xs sm:text-base';
          break;
        case 'fire':
          style.current = 'grid grid-cols-2 bg-[#FF9441] shadow-lg rounded-xl p-3 text-xs sm:text-base';
          break;
        case 'water':
          style.current = 'grid grid-cols-2 bg-[#5A9CA4] shadow-lg rounded-xl p-3 text-xs sm:text-base';
          break;
        case 'bug':
          style.current = 'grid grid-cols-2 bg-[#E6CD94] shadow-lg rounded-xl p-3 text-xs sm:text-base';
          break;
        case 'poison':
          style.current = 'grid grid-cols-2 bg-[#7B316A] shadow-lg rounded-xl p-3 text-xs sm:text-base';
          break;
        case 'electric':
          style.current = 'grid grid-cols-2 bg-[#F6BD20] shadow-lg rounded-xl p-3 text-xs sm:text-base';
          break;
        case 'ground':
          style.current = 'grid grid-cols-2 bg-[#8B6218] shadow-lg rounded-xl p-3 text-xs sm:text-base';
          break;
        case 'fairy':
          style.current = 'grid grid-cols-2 bg-[#FFACAC] shadow-lg rounded-xl p-3 text-xs sm:text-base';
          break;
        case 'fighting':
          style.current = 'grid grid-cols-2 bg-[#9C6A6A] shadow-lg rounded-xl p-3 text-xs sm:text-base';
          break;
        case 'psychic':
          style.current = 'grid grid-cols-2 bg-[#CDBD20] shadow-lg rounded-xl p-3 text-xs sm:text-base';
          break;
        case 'ghost':
          style.current = 'grid grid-cols-2 bg-[#D5ACCD] shadow-lg rounded-xl p-3 text-xs sm:text-base';
          break;
        case 'rock':
          style.current = 'grid grid-cols-2 bg-[#ACACD5] shadow-lg rounded-xl p-3 text-xs sm:text-base';
          break;
        case 'ice':
          style.current = 'grid grid-cols-2 bg-[#4A83D5] shadow-lg rounded-xl p-3 text-xs sm:text-base';
          break;
        default:
          style.current = 'grid grid-cols-2 bg-[#D5A45A]  shadow-lg rounded-xl p-3 text-xs sm:text-base';
          break;
      }
}

export {styler}