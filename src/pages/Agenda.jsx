import React, { Component } from "react";
import Card from "../components/CardAgenda";
import $ from "jquery";


class Agenda extends Component {
    constructor() {
        super()
        this.state = {
            agenda: [
                {
                    nama: "Seminar Bahasa", tanggal: "2022-04-12"
                },
                {
                    nama: "Rapat Bulanan", tanggal: "2022-04-13"
                },
                {
                    nama: "Jalan Sehat", tanggal: "2022-04-14"
                },

            ],
            action: "",
            nama: "",
            tanggal: "",
            SelectionItem: null,
        }
        this.state.filterAgenda = this.state.agenda

    }
    render() {
        return (
            <div className="container">
                <input type = "text" className="form-control my-2"placeholder="Pencarian"
                    value={this.state.keyword}
                    onChange= {ev => this.setState({keyword: ev.target.value})}
                    onKeyUp= {ev => this.searching(ev)}
                    />
                <div className="row">
                    {this.state.filterAgenda.map((item, index) => (
                        <Card

                            nama={item.nama}
                            tanggal={item.tanggal}
                            onEdit={() => this.Edit(item)}
                            onDrop={() => this.Drop(item)}
                        />
                    ))}
                </div>

                <button className="btn btn-success" onClick={() => this.Add()}>

                    Tambah Agenda
                </button>
                {/* component modal sbg control manipulasi data */}
                <div className="modal" id="modal_agenda">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">
                                Form Agenda
                            </div>
                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Nama Agenda

                                    <input type="text" className="form-control mb-2"

                                        value={this.state.judul}
                                        onChange={ev => this.setState({
                                            judul:
                                                ev.target.value
                                        })}
                                        required />
                                    Tanggal

                                    <input type="text" className="form-control mb-2"

                                        value={this.state.penulis}
                                        onChange={ev => this.setState({
                                            penulis
                                                : ev.target.value
                                        })}
                                        required />

                                    <button className="btn btn-info btn-block" type="submit">

                                        Simpan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    Add = () => {
        // menampilkan komponen modal
        $("#modal_agenda").show()
        this.setState({
            isbn: Math.random(1, 10000000),

            nama: "",
            tanggal: "",
            action: "insert"
        })
    }
    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_agenda").show()
        this.setState({
            nama: "",
            tanggal: "",
            action: "update",
            selectedItem: item
        })
    }
    Save = (event) => {
        event.preventDefault();
        // menampung data state agenda
        let tempAgenda = this.state.agenda
        if (this.state.action === "insert") {
            // menambah data baru
            tempAgenda.push({
                nama: this.state.nama,
                tanggal: this.state.tanggal,
            })

        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempAgenda.indexOf(this.state.selectedItem)
            tempAgenda[index].nama = this.state.nama
            tempAgenda[index].tanggal = this.state.tanggal
        }
        this.setState({ buku: tempAgenda })
        // menutup komponen modal_agenda
        $("#modal_agenda").hide()
    }
    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            // menghapus data
            let tempAgenda = this.state.agenda
            // posisi index data yg akan dihapus
            let index = tempAgenda.indexOf(item)
            // hapus data
            tempAgenda.splice(index, 1)
            this.setState({ agenda: tempAgenda })
        }
    }
    searching = event => {
        if (event.keyCode === 13) {

            let keyword = this.state.keyword.toLowerCase()
            let tempAgenda = this.state.agenda
            let result = tempAgenda.filter(item => {
                return item.nama.toLowerCase().includes(keyword) ||
                item.tanggal.toLowerCase().includes(keyword) 

            })
            
            this.setState({filterAgenda : result})

        }
    }
}

export default Agenda;