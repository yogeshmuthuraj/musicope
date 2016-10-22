﻿import { Song } from "../../song/song";
import { IKeyboardAction } from "../i-actions";

export function esc(keyboardActions: { [key: string]: IKeyboardAction }) {
    keyboardActions["esc"] = {
        title: "Exit",
        description: "Exit the gameplay.",
        triggerAction: (song: Song) => {
            mainView.router.back();
        },
        getCurrentState: () => {
            return null;
        }
    };


}