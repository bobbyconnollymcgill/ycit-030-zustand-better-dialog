import { useMemo } from "react"

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material"

import { useDialogStore } from "./store"

export const DialogProvider = ({ children }) => {
    const { dialogState, type, message, headerText, close } = useDialogStore()

    const isOpen = dialogState === "opened"

    const buttons = useMemo(() => {
        switch (type) {
            case "yes-no":
                return (
                    <>
                        <Button onClick={() => close("no")}>No</Button>
                        <Button onClick={() => close("yes")}>Yes</Button>
                    </>
                )
            default:
                return (
                    <>
                        <Button onClick={() => close("ok")}>OK</Button>
                    </>
                )
        }
    }, [type]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {children}
            <Dialog open={isOpen}>
                {headerText && <DialogTitle>{headerText}</DialogTitle>}
                <DialogContent>
                    <DialogContentText>{message}</DialogContentText>
                    <DialogActions>{buttons}</DialogActions>
                </DialogContent>
            </Dialog>
        </>
    )
}
