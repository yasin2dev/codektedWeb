import React from 'react'
import { userFile } from '../structers/interfaceStruct'

export default function PrintUser(props: userFile) {
    let sigortaVar = props.sigorta;
    return (
        <div className='userInformation'>
            <h1>Kullanıcı Bilgileri Ektedir;</h1>
            <p><b>Dosya Numarası: </b>{props.dosyaNo}</p>
            <p><b>Adı: </b>{props.isim}</p>
            <p><b>Soyadı: </b>{props.soyisim}</p>
            <p><b>TC Kimlik No: </b>{props.TCKN}</p>
            <p><b>Sigorta: </b>{sigortaVar ? props.sigorta : "Sigorta Yoktur"}</p>
        </div>
    )
}