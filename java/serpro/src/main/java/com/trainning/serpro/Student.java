package com.trainning.serpro;

public class Student {
    private int id;
    private String nome;
    
    Student(int id, String nome) {
        this.id = id;
        this.nome = nome;
    }
    
    public int getId() {
        return this.id;
    }
    
    public String getNome() {
        return this.nome;
    }
}
