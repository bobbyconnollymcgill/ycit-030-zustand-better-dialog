import create from "zustand"

export const useAppStore = create((set) => {
    return {
        role: "user",

        promoteToAdmin: () => {
            set({
                role: "admin",
            })
        },
    }
})

export const useDialogStore = create((set, get) => {
    return {
        dialogState: "closed",

        type: "",
        message: "",
        headerText: "",

        resolve: null,

        open: (type, message, headerText) => {
            set({
                dialogState: "opened",
                type,
                message,
                headerText,
            })
        },

        close: (result) => {
            get().resolve(result)

            set({
                dialogState: "closed",
            })
        },

        msgBox: (message, headerText) => {
            get().open("ok", message, headerText)

            // Note: we store the "resolve" into our state manager so that we can call it later (when the user clicks OK/yes/no)
            return new Promise((resolve) => {
                set({
                    resolve,
                })
            })
        },

        msgBoxYN: (message, headerText) => {
            get().open("yes-no", message, headerText)

            return new Promise((resolve) => {
                // get().resolve = resolve // NOTE: this accomplishes the same thing as the line below, so I'll leave this example here for reference
                set({
                    resolve,
                })
            })
        },
    }
})
