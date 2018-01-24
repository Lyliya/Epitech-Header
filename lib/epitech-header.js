const {
        CompositeDisposable
} = require('atom')

module.exports = {
        subscriptions: null,

        activate() {
                this.subscriptions = new CompositeDisposable()
                this.subscriptions.add(atom.commands.add('atom-workspace', {
                        'epitech-header:convert': () => this.convert()
                }))
        },

        deactivate() {
                this.subscriptions.dispose()
        },

        convert() {
                const editor = atom.workspace.getActiveTextEditor()
                if (editor) {
                        if (editor.getTitle() == "Makefile") {
                                editor.setCursorBufferPosition([0, 0]);
                                editor.insertText("##\n## EPITECH PROJECT, 2018\n## " + editor.getTitle() + "\n## File description:\n##\n##");
                                editor.save();
                                return;
                        }
                        switch (editor.getTitle().split('.').pop()) {
                                case "c":
                                        editor.setCursorBufferPosition([0, 0]);
                                        editor.insertText("/*\n** EPITECH PROJECT, 2018\n** " + editor.getTitle() + "\n** File description:\n** function\n*/\n");
                                        break;
                                case "cpp":
                                        editor.setCursorBufferPosition([0, 0]);
                                        editor.insertText("//\n// EPITECH PROJECT, 2018\n// " + editor.getTitle() + "\n// File description:\n// function\n//\n");
                                        break;
                                case "h":
                                        editor.setCursorBufferPosition([0, 0]);
                                        editor.insertText("/*\n** EPITECH PROJECT, 2018\n** " + editor.getTitle() + "\n** File description:\n** header\n*/\n\n#ifndef " + editor.getTitle().split('.')[0].toUpperCase() + "_H_\n# define " + editor.getTitle().split('.')[0].toUpperCase() + "_H_\n\n#endif /* !" + editor.getTitle().split('.')[0].toUpperCase() + "_H_ */");
                                        break;
                                case "hpp":
                                        editor.setCursorBufferPosition([0, 0]);
                                        editor.insertText("//\n// EPITECH PROJECT, 2018\n// " + editor.getTitle() + "\n// File description:\n// header\n//\n\n#pragma once");
                                        break;
                                default:

                        }
                        editor.save();
                }
        }
}
