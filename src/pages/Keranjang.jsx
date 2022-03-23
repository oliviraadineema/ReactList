import React, {Component} from 'react';
import $ from 'jquery';
import Card2 from '../components/CardKeranjang';

class Keranjang extends Component {
    constructor(){
        super()
        

        this.state = {
            keranjang:[
                {
                    nama: "A4 80", harga: 45000 , jumlah:5
                },
                {
                    nama: "A4 70 ", harga: 55000, jumlah:9
                },
                {
                    nama: "Buku 38 ", harga: 33000 , jumlah:2
                },
                {
                    nama: "Tipe-X", harga: 3000 , jumlah:5
                },

            ],

            action:"",
            nama:"",
            harga: 0,
            jumlah:0,
            // total: null,
            selectedItem: null,

            
        }
        


        this.state.filterKeranjang = this.state.keranjang
    }

    render(){
        return(
            <div className='container'>
                <input type="text" className='form-contro; my-2' placeholder='Pencarian' value={this.state.keyword} onChange={ev => this.setState({keyword: ev.target.value})} onKeyUp={ev => this.searching(ev)}/>
                <div className='row'>
                    {this.state.filterKeranjang.map((item, index) => (
                        <Card2 nama={item.nama} harga={item.harga} jumlah={item.jumlah} total={item.total} onEdit={() => this.Edit(item)} onDrop={() => this.Drop(item)} />
                    ))}
                </div>
                <button className='btn btn-success' onClick={() => this.Add()}>
                    Tambah data
                </button>
                <div className="modal" id="modal_keranjang">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">
                                Form Troli
                            </div>
                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Nama

                                    <input type="text" className="form-control mb-2"

                                        value={this.state.nama}
                                        onChange={ev => this.setState({
                                            nama:
                                                ev.target.value
                                        })}
                                        required />
                                    Harga

                                    <input type="number" className="form-control mb-2"

                                        value={this.state.harga}
                                        onChange={ev => this.setState({
                                            harga
                                                : ev.target.value
                                        })}
                                        required />
                                    Jumlah

                                    <input type="number" className="form-control mb-2"

                                        value={this.state.jumlah}
                                        onChange={ev => this.setState({ jumlah: ev.target.value })}
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
        );
    }

    Add = () => {
        // menampilkan komponen modal
        $("#modal_keranjang").show()
        this.setState({
            nama: "",
            harga: 0,
            jumlah: 0,
            action: "insert"
        })
    }

    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_keranjang").show()
        this.setState({
            nama: item.nama,
            harga: item.harga,
            jumlah: item.jumlah,
            action: "update",
            selectedItem: item
        })
    }

    Save = (event) => {
        event.preventDefault();
        // menampung data state buku
        let tempKeranjang = this.state.keranjang
        if (this.state.action === "insert") {
            // menambah data baru
            tempKeranjang.push({
                nama: this.state.nama,
                harga: this.state.harga,
                jumlah: this.state.jumlah
            })

        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempKeranjang.indexOf(this.state.selectedItem)
            tempKeranjang[index].nama = this.state.nama
            tempKeranjang[index].harga = this.state.harga
            tempKeranjang[index].jumlah = this.state.jumlah
        }
        this.setState({ keranjang: tempKeranjang })
        // menutup komponen modal_buku
        $("#modal_keranjang").hide()
    }
   
    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            // menghapus data
            let tempKeranjang = this.state.keranjang
            // posisi index data yg akan dihapus
            let index = tempKeranjang.indexOf(item)
            // hapus data
            tempKeranjang.splice(index, 1)
            this.setState({ keranjang: tempKeranjang })
        }
    }

    searching = event => {
        if (event.keyCode === 13) {
            let keyword = this.state.keyword.toLowerCase()
            let tempKeranjang = this.state.keranjang
            let result = tempKeranjang.filter(item => {
                return item.nama.toLowerCase().includes(keyword) 
            })
            this.setState({ filterKeranjang: result })
        }
    }
}

export default Keranjang;