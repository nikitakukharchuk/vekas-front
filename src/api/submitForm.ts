import {instance} from "@/api/Instance/instance";
import {FormType} from "@/types/FormType";

export const formApi = {
    postForm(formData: FormType) {
        return instance.post<FormType>('submit-form', formData)
    }
}