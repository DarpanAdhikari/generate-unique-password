```markdown
# Generate Unique Password

This package provides a highly customizable password generator that supports multiple languages, strength levels, and password types. With a variety of options, this tool is perfect for developers who need to generate unique and secure passwords for their applications.

## Benefits

- **Multi-Language Support**: Generate passwords in multiple languages including Nepali, Hindi, Cyrillic, Arabic, Korean, Japanese, Spanish, Portuguese, German, Chinese, and English.
- **Flexible Strength Levels**: Choose from three strength levels — `normal`, `medium`, and `strong` — to control the complexity of the generated passwords.
- **Customizable Password Types**: Supports both `password` (alphanumeric with symbols) and `pin` (numeric only) password types.
- **Easy Integration**: A simple API with customizable parameters that can be easily integrated into any JavaScript or Node.js project.
- **Open Source and Free**: Licensed under the Apache-2.0 License, making it free to use and distribute in both personal and commercial projects.
  
By using this package, developers can quickly and easily generate secure passwords that fit specific language requirements and security standards, saving time and enhancing the security of their applications.

## Installation

You can install this package via npm by running the following command:

```bash
npm i generate-unique-password
```

## Usage

Once installed, you can import and use the password generator in your project like this:

```javascript
const generatePassword = require('generate-unique-password');

// Generate a random password in Nepali with medium strength
let password = generatePassword(12, "password", "medium", "nepali");
console.log(password);

// Generate a pin with 6 digits
let pin = generatePassword(6, "pin", "normal", "english");
console.log(pin);
```

### Parameters:
- **length** (default: `8`): The length of the password.
- **type** (default: `password`): The type of password to generate. Use `pin` for numeric-only passwords and `password` for alphanumeric passwords with symbols.
- **strength** (default: `medium`): The complexity of the password. Options are:
  - `normal`: Lower complexity (letters only).
  - `medium`: Medium complexity (letters and numbers).
  - `strong`: High complexity (letters, numbers, and symbols).
- **language** (default: `english`): The language for the password. Supported languages include:
  - `english`
  - `nepali`
  - `hindi`
  - `cyrillic`
  - `arabic`
  - `korean`
  - `japanese`
  - `spanish`
  - `portuguese`
  - `german`
  - `chinese`

## License

This project is licensed under the **Apache-2.0 License** - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to improve the functionality or add support for additional languages.

---

Developed with ❤️ by [Darpan Adhikari](https://www.darpanadhikari.com.np). 

```

### Key Points:
- **Benefits**: The README highlights the main features of your package, including multi-language support, flexible strength levels, and customizable password types.
- **Installation**: Provides the npm installation command.
- **Usage**: Includes a simple example of how to use the password generator in a project.
- **License**: It mentions the Apache-2.0 license, ensuring transparency and permission for free use and distribution.