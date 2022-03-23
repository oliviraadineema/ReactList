import React from "react"
    class Card extends React.Component{

    render(){
        return (
            <div className="col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                        
                        {/* menampilkan deskripsi */}
                        <div className="col-7">
                            <h5 className="text-info">
                                Nama: { this.props.nama }
                            </h5>

                            <h6 className="text-danger">
                                Harga: Rp { this.props.harga}
                            </h6>

                            <h6 className="text-dark">
                                Jumlah: { this.props.jumlah}
                            </h6>

                            {/* button untuk mengedit */}
                            <button className="btn btn-sm btn-primary m-1" onClick={this.props.onEdit}>
                                Edit
                            </button>
                            {/* button untuk menghapus */}
                            <button className="btn btn-sm btn-danger m-1" onClick={this.props.onDrop}>
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    
}
export default Card;