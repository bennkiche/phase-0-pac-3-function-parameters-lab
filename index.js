function introduction(name) {
    return `Hi, my name is ${name}.`;
}
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
function introductionWithLanguageOptional(name, language= "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// function introductionWithLanguageOptional(firstName = "Benn") {
//     console.log(`Hello, ${firstName}!`);
//   }
// function introductionWithLanguage(firstName = Benn) {
//     console.log(`Hi my name is and Iam ${firstName}!`);
// }

// function introduction(name) {
// 9 |     console.log(`Hi, my name is ${name})'
