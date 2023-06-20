export type FormType = {
    Name: string,
    Phone: string,
    Email: string,
    Company: string,
    Position: string,
    Message: string,
    Checkbox?: boolean
}

export type ModalType = {
    open: boolean,
    onClose: () => void
}