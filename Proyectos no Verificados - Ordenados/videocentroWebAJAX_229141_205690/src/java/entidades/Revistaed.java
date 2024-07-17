/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package entidades;

public class Revistaed {

    private Long isbnrevista;
    private Integer existencia;
    private Integer disponibilidad;
    private Revista revista;

    public Revistaed() {
    }

    public Revistaed(Long isbnrevista) {
        this.isbnrevista = isbnrevista;
    }

    public Revistaed(Long isbnrevista, Integer existencia, Integer disponibilidad, Revista revista) {
        this.isbnrevista = isbnrevista;
        this.existencia = existencia;
        this.disponibilidad = disponibilidad;
        this.revista = revista;
    }

    public Long getIsbnrevista() {
        return isbnrevista;
    }

    public void setIsbnrevista(Long isbnrevista) {
        this.isbnrevista = isbnrevista;
    }

    public Integer getExistencia() {
        return existencia;
    }

    public void setExistencia(Integer existencia) {
        this.existencia = existencia;
    }

    public Integer getDisponibilidad() {
        return disponibilidad;
    }

    public void setDisponibilidad(Integer disponibilidad) {
        this.disponibilidad = disponibilidad;
    }

    public Revista getRevista() {
        return revista;
    }

    public void setRevista(Revista revista) {
        this.revista = revista;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (isbnrevista != null ? isbnrevista.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Revistaed)) {
            return false;
        }
        Revistaed other = (Revistaed) object;
        if ((this.isbnrevista == null && other.isbnrevista != null) || (this.isbnrevista != null && !this.isbnrevista.equals(other.isbnrevista))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entidades.Revistaed[ isbnrevista=" + isbnrevista + " ]";
    }
    
}
