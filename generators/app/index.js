"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const glob = require("glob");
const yosay = require("yosay");

module.exports = class extends Generator {
  async prompting() {
    let answers;

    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the lovely ${chalk.red(
          "generator-pxl-angular"
        )} generator!
        Use this only from the main angular folder!`
      )
    );

    const prompts = [{
        type: "input",
        name: "name",
        message: "pxl.angular module name ? Start with uppercase. Ex: Cars"
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
    glob(this.templatePath() + "/**/*", function (err, files) {
      files.forEach(file => {
        const originalFileName = file.replace(
          parent.templatePath().replace(/\\/gi, "/") + "/",
          ""
        );
        const newFileName = originalFileName.replace(
          /template/gi,
          String(parent.props.name).toLowerCase()
        );
        if (/\./gi.test(originalFileName)) {
          parent.fs.copyTpl(
            parent.templatePath(originalFileName),
            parent.destinationPath('src/app/' + String(parent.props.name).toLowerCase() + '/' + newFileName), {
              mainTitle: parent.props.name,
              secondaryTitle: String(parent.props.name).toLowerCase(),
              mainModel: parent.props.model,
              secondaryModel: String(parent.props.model).toLowerCase()
            }
          );
        }

      });
    });
  }

  install() {
    // this.installDependencies();
  }
};
