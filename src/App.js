import { Button, Typography } from "@mui/material"

import { useAppStore, useDialogStore } from "./store"

export const App = () => {
    const { role, promoteToAdmin } = useAppStore()
    const { msgBox, msgBoxYN } = useDialogStore()

    return (
        <div>
            <Typography>{`Your current role is ${role}`}</Typography>

            <Button
                onClick={async () => {
                    const result = await msgBoxYN("Are you sure you want to promote to admin?", "Promote to admin") // prettier-ignore

                    if (result === "yes") {
                        promoteToAdmin()
                    }
                }}
            >
                Promote to admin
            </Button>

            <Button
                onClick={async () => {
                    await msgBox("Click OK to close dialog", "Close dialog 1")
                    await msgBox("Click OK to close dialog", "Close dialog 2")
                }}
            >
                A couple message boxes
            </Button>
        </div>
    )
}
