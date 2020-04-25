"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const glob = require("glob");

module.exports = class extends Generator {
  prompting() {
    yosay(
      `Welcome to the lovely ${chalk.red(
        "yo-ngx-rocket-module-generator"
      )} generator!
      Use this only from the main angular folder!`
    );

    const prompts = [
      {
        type: "input",
        name: "name",
        message:
          "yo-ngx-rocket-module-generator module name ? Start with uppercase. Ex: Cars"
      },
      {
        type: "input",
        name: "model",
        message: "model name used in the module ? Start with uppercase. Ex: Car"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const parent = this;
    glob(this.templatePath() + "/**/*", function(err, files) {
      if (err) {
        console.error(err);
      } else {
        files.forEach(file => {
          const originalFileName = file.replace(
            parent.templatePath().replace(/\\/gi, "/") + "/",
            ""
          );
          let newFileName = originalFileName
            .replace(/modeltemplate/gi, String(parent.props.model))
            .toLowerCase()
            .replace(/template/gi, String(parent.props.name).toLowerCase());
          if (/\./gi.test(originalFileName)) {
            parent.fs.copyTpl(
              parent.templatePath(originalFileName),
              parent.destinationPath(
                "src/app/" +
                  String(parent.props.name).toLowerCase() +
                  "/" +
                  newFileName
              ),
              {
                mainTitle: parent.props.name,
                secondaryTitle: String(parent.props.name).toLowerCase(),
                mainModel: parent.props.model,
                secondaryModel: String(parent.props.model).toLowerCase()
              }
            );
          }
        });
      }
    });
  }

  install() {
    // This.installDependencies();
  }
};
