package com.darylrue.crudapp.util;

public class Confirmation {

    public boolean success;
    public String message;

    public Confirmation(boolean success) {
        this.success = success;
    }

    public Confirmation(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

}
