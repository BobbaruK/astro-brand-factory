import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import type { ComponentProps } from "../../types/ComponentProps";
import formFieldsTranslations from "../../translations/formFields";

interface Props extends React.HTMLAttributes<HTMLFormElement> {
  componentProps: ComponentProps;
  id: string;
  button: string;
}

const Form = ({ componentProps, id, button, ...restProps }: Props) => {
  const brand = componentProps.brandObj;
  const translations = formFieldsTranslations(brand);

  return (
    <form {...restProps} className={`registerForm w-full ${restProps.className || ""}`} id={id}>
      <div className="registerFormInner">
        <div className="form-control firstNameWrapper">
          <div className="field">
            <Label htmlFor={`${id}-firstName`}>{translations.firstName[componentProps.lang]}</Label>
            <div className="input">
              <Input id={`${id}-firstName`} type="text" placeholder={translations.firstName[componentProps.lang]} name="firstName" />
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="success">
                <path fill="var(--clr-success)" d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4l4.25 4.25ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="error">
                <path
                  fill="var(--clr-danger)"
                  d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6L8.4 17Zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"></path>
              </svg>
            </div>
          </div>
          <div className="error"></div>
        </div>

        <div className="form-control lastNameWrapper">
          <div className="field">
            <Label htmlFor={`${id}-lastName`}>{translations.lastName[componentProps.lang]}</Label>
            <div className="input">
              <Input id={`${id}-lastName`} type="text" placeholder={translations.lastName[componentProps.lang]} name="lastName" />
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="success">
                <path fill="var(--clr-success)" d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4l4.25 4.25ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="error">
                <path
                  fill="var(--clr-danger)"
                  d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6L8.4 17Zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"></path>
              </svg>
            </div>
          </div>
          <div className="error"></div>
        </div>

        <div className="form-control emailWrapper">
          <div className="field">
            <Label htmlFor={`${id}-email`}>{translations.email[componentProps.lang]}</Label>
            <div className="input">
              <Input id={`${id}-email`} type="email" placeholder={translations.email[componentProps.lang]} name="email" />
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="success">
                <path fill="var(--clr-success)" d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4l4.25 4.25ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="error">
                <path
                  fill="var(--clr-danger)"
                  d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6L8.4 17Zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"></path>
              </svg>
            </div>
          </div>
          <div className="error"></div>
        </div>

        <div className="form-control countryWrapper">
          <div className="field">
            <Label htmlFor={`${id}-country`}>{translations.country[componentProps.lang]}</Label>
            <div className="input">
              <select
                id={`${id}-country`}
                className="country-select flex h-9 items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-full h-[40px]"
                name="country"></select>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="success">
                <path fill="var(--clr-success)" d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4l4.25 4.25ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="error">
                <path
                  fill="var(--clr-danger)"
                  d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6L8.4 17Zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"></path>
              </svg>
            </div>
          </div>
          <div className="error"></div>
        </div>

        <div className="form-control phoneNumberWrapper">
          <div className="field">
            <Label htmlFor={`${id}-phone`}>{translations.phoneNo[componentProps.lang]}</Label>
            <div className="input">
              <div className="phone">
                <Input className="phone-prefix" name="phone-prefix" type="text" placeholder="prefix" disabled />
                <Input id={`${id}-phone`} type="tel" placeholder={translations.phoneNo[componentProps.lang]} name="phone" />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="success">
                <path fill="var(--clr-success)" d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4l4.25 4.25ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="error">
                <path
                  fill="var(--clr-danger)"
                  d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6L8.4 17Zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"></path>
              </svg>
            </div>
          </div>
          <div className="error"></div>
        </div>
        {(componentProps.lpType == "classic" || componentProps.lpType == "endorsed") && (
          <div className="form-control agreementWrapper agreementWrapperClassic">
            <div className="field">
              <input type="checkbox" id={`${id}-agreementClassic`} name="agreementClassic" defaultChecked />
              <Label htmlFor={`${id}-agreementClassic`} className="agreement">
                {translations.agreeClassicShort[componentProps.lang]}
              </Label>
            </div>
            <div className="error" />
          </div>
        )}

        {componentProps.lpType == "esma" && (
          <>
            <div className="form-control agreementWrapper agreementWrapperEsma agree1ESMA">
              <div className="field">
                <input type="checkbox" id={`${id}-agreement1ESMA`} name="agreement1ESMA" defaultChecked />
                <Label htmlFor={`${id}-agreement1ESMA`} className="agreement" dangerouslySetInnerHTML={{ __html: translations.agree1ESMA[componentProps.lang] }} />
              </div>
              <div className="error" />
            </div>
            <div className="form-control agreementWrapper agreementWrapperEsma agree2ESMA">
              <div className="field">
                <input type="checkbox" id={`${id}-agreement2ESMA`} name="agreement2ESMA" defaultChecked />
                <Label htmlFor={`${id}-agreement2ESMA`} className="agreement" dangerouslySetInnerHTML={{ __html: translations.agree2ESMA[componentProps.lang] }} />
              </div>
              <div className="error" />
            </div>
          </>
        )}

        <div className="form-control submitButtonWrapper">
          <Button type="submit" name="submit">
            {componentProps.brandObj.whatsapp && (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"
                />
              </svg>
            )}
            {button}
          </Button>
          <div className="error"></div>
        </div>

        {componentProps.lpType == "esma" && (
          <div className="form-control riskEsma">
            <div className="field">
              <label className="agreement">{componentProps.langType === "cysec" ? translations.riskESMA_CYSEC[componentProps.lang] : translations.riskESMA_FSA[componentProps.lang]}</label>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default Form;
