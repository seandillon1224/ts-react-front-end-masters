const lengthOfLongestSubstring = function(s) {
    if (s.length === 1 || s.length === 0) return s.length;
    const split = s.split("");
    const lengths = [];
    for (let i = 0; i < split.length; i++){
        let substr = split[i];
        for (let b = i+1; b < split.length; b++){
            if (!substr.includes(split[b])){
                substr += split[b];
                lengths.push(substr.length);
            }
            else {
                substr = '';
            }
        }   
    }
    return Math.max(...lengths);
};

console.log(lengthOfLongestSubstring('aa'))