package com.darylrue.crudapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * The client entity corresponding to the "client" table in the database.
 */
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer companyId;

    @NotNull
    @Size(min = 1, max = 50, message = "Company name is required with maximum length of 50")
    private String companyName;

    @Size(max = 255, message = "Website URI cannot be longer than 255 characters")
    private String websiteUri;

    @NotNull
    @Size(min = 1, max = 50, message = "Phone number is required with maximum length of 50")
    private String phone;

    @NotNull
    @Size(min = 1, max = 50, message = "Physical street address is required with maximum length of 50")
    private String physStreet;

    @NotNull
    @Size(min = 1, max = 50, message = "Physical city is required with maximum length of 50")
    private String physCity;

    @NotNull
    @Size(min = 2, max = 2, message = "Physical state is required with length 2")
    private String physState;

    @NotNull
    @Size(min = 5, max = 5, message = "Physical zip code is required with length 5")
    private String physZipCode;

    @Size(max = 50, message = "Mailing street address cannot be longer than 50 characters")
    private String mailStreet;

    @Size(max = 50, message = "Mailing city cannot be longer than 50 characters")
    private String mailCity;

    @Size(min = 2, max = 2, message = "Mailing state must be 2 characters")
    private String mailState;

    @Size(min = 5, max = 5, message = "Mailing zip code must be 5 characters")
    private String mailZipCode;


    //GETTERS AND SETTERS
    public Integer getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getWebsiteUri() {
        return websiteUri;
    }

    public void setWebsiteUri(String websiteUri) {
        this.websiteUri = websiteUri;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPhysStreet() {
        return physStreet;
    }

    public void setPhysStreet(String physStreet) {
        this.physStreet = physStreet;
    }

    public String getPhysCity() {
        return physCity;
    }

    public void setPhysCity(String physCity) {
        this.physCity = physCity;
    }

    public String getPhysState() {
        return physState;
    }

    public void setPhysState(String physState) {
        this.physState = physState;
    }

    public String getPhysZipCode() {
        return physZipCode;
    }

    public void setPhysZipCode(String physZipCode) {
        this.physZipCode = physZipCode;
    }

    public String getMailStreet() {
        return mailStreet;
    }

    public void setMailStreet(String mailStreet) {
        this.mailStreet = mailStreet;
    }

    public String getMailCity() {
        return mailCity;
    }

    public void setMailCity(String mailCity) {
        this.mailCity = mailCity;
    }

    public String getMailState() {
        return mailState;
    }

    public void setMailState(String mailState) {
        this.mailState = mailState;
    }

    public String getMailZipCode() {
        return mailZipCode;
    }

    public void setMailZipCode(String mailZipCode) {
        this.mailZipCode = mailZipCode;
    }

}

