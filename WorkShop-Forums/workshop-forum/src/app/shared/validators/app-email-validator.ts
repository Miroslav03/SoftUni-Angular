import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(domains: string[]): ValidatorFn {
    const domainsString = domains.join('|')
    const regex = new RegExp(`^[a-zA-Z0-9]{6,}@gmail\.(${domainsString})$`);

    return (control) => {        
        if (control.value === '' || regex.test(control.value)) {
            return null;
        } else {
            return { appEmail: true };
        }
    }
}