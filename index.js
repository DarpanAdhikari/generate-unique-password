export function generatePassword({length = 8, type = "password", strength = "medium", language = "english"}) {
    if (length < 1) {
        throw new Error("Password length must be at least 1.");
    }
    const charPools = {
        normal: "abcdefghijklmnopqrstuvwxyz",
        medium: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        strong: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:,.<>?/"
    };

    const languagePools = {
        english: charPools,
        nepali: {
            normal: "कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह",
            medium: "कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह0123456789",
            strong: "कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह0123456789!@#$%^&*()-_=+[]{};:,.<>?/"
        },
        hindi: {
            normal: "अआइईउऊऋएऐओऔअंअःकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह",
            medium: "अआइईउऊऋएऐओऔअंअःकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह0123456789",
            strong: "अआइईउऊऋएऐओऔअंअःकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह0123456789!@#$%^&*()-_=+[]{};:,.<>?/"
        },
        cyrillic: {
            normal: "абвгдежзийклмнопрстуфхцчшщъыьэюя",
            medium: "абвгдежзийклмнопрстуфхцчшщъыьэюяАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789",
            strong: "абвгдежзийклмнопрстуфхцчшщъыьэюяАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789!@#$%^&*()-_=+[]{};:,.<>?/"
        },
        arabic: {
            normal: "ابتثجحخدذرزسشصضطظعغفقكلمنهوي",
            medium: "ابتثجحخدذرزسشصضطظعغفقكلمنهوي0123456789",
            strong: "ابتثجحخدذرزسشصضطظعغفقكلمنهوي0123456789!@#$%^&*()-_=+[]{};:,.<>?/"
        },
        korean: {
            normal: "가나다라마바사아자차카타파하",
            medium: "가나다라마바사아자차카타파하0123456789",
            strong: "가나다라마바사아자차카타파하0123456789!@#$%^&*()-_=+[]{};:,.<>?/"
        },
        japanese: {
            normal: "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん",
            medium: "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん0123456789",
            strong: "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん0123456789!@#$%^&*()-_=+[]{};:,.<>?/"
        },
        spanish: {
            normal: "abcdefghijklmnñopqrstuvwxyz",
            medium: "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789",
            strong: "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:,.<>?/"
        },
        portuguese: {
            normal: "abcdefghijklmnopqrstuvwxyzáéíóúãõç",
            medium: "abcdefghijklmnopqrstuvwxyzáéíóúãõçABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÃÕÇ0123456789",
            strong: "abcdefghijklmnopqrstuvwxyzáéíóúãõçABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÃÕÇ0123456789!@#$%^&*()-_=+[]{};:,.<>?/"
        },
        german: {
            normal: "abcdefghijklmnopqrstuvwxyzäöüß",
            medium: "abcdefghijklmnopqrstuvwxyzäöüßABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜẞ0123456789",
            strong: "abcdefghijklmnopqrstuvwxyzäöüßABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜẞ0123456789!@#$%^&*()-_=+[]{};:,.<>?/"
        },
        chinese: {
            normal: "的一是了我不在人他有这中大为上个国",
            medium: "的一是了我不在人他有这中大为上个国0123456789",
            strong: "的一是了我不在人他有这中大为上个国0123456789!@#$%^&*()-_=+[]{};:,.<>?/"
        }
    };

    const selectedLanguage = languagePools[language.toLowerCase()] || languagePools.english;

    let characters = selectedLanguage[strength.toLowerCase()] || selectedLanguage.medium;

    if (type === "pin") {
        characters = "0123456789";
    } else if (type !== "password") {
        throw new Error("Unsupported type. Use 'pin' or 'password'.");
    }
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
}