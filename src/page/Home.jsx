import React from "react";
import Farm from "../assets/farm.jpg";

export const Home = () => {
  return (
    <div className="mt-10">
      <h1 className=" text-3xl text-center mb-6">Happy Dog Farm</h1>
      <img className="w-full rounded-sm" src={Farm} />
      <div>
        <p className=" text-center  mt-5 m-auto ">
          Tabii ki! Hoş geldiniz [Çiftlik Adınız]! Burada tutkuyla dostluğun
          buluştuğu bir yerde sizi ağırlamaktan büyük gurur duyuyoruz. Sağlıklı
          ve sevgi dolu tüylü arkadaşlarımızın çeşitli bir seçkisini sunmak
          bizim için sadece üretim değil, aynı zamanda ailenizin ayrılmaz bir
          parçası olacak istisnai arkadaşlar yetiştiren bir sığınak.
        </p>
        <h1 className=" text-2xl mt-6">Happy Dog Farm</h1>

        <p className=" text-2xl  mb-2">Köpek Dostlarımızı Keşfedin:</p>
        <p className=" font-medium text-xl">1. Saint Bernand:</p>
        <p>
          Boyutlarıyla etkileyici, doğasıyla nazik - Saint Bernand'larımız
          sadece evcil hayvanlar değil, sadık bekçiler ve sevgi dolu aile
          üyeleridir.
        </p>

        <p className=" font-medium text-xl">2. Pomeranian Spitz:</p>
        <p>
          Sevimli, tüylü ve tam bir cazibe, Pomeranian Spitz'lerimiz evinize
          neşe ve sıcaklık katacak. Boyutları küçük, kişilikleri ise büyük!
        </p>

        <p className=" font-medium text-xl">3. Maltipoo:</p>
        <p>
          Şirin Maltipoo'larımızla tanışın - Maltese ve Poodle'ın mükemmel bir
          karışımı. Bu sevimli ve oyunbaz arkadaşlar, hoş bir küçük boy ırk
          arayanlar için ideal.
        </p>

        <p className=" text-2xl mt-6 mb-2">Elegansın Dünyasına Adım Atın:</p>
        <p className=" font-medium text-xl">1. Savannah F4:</p>
        <p>
          Zarafetin ve güzelliğin simgesi olan Savannah F4 kedilerimiz, her evin
          büyüleyici bir eklemesi olacak. Belirgin desenleri ve oyunbaz
          doğasıyla olağanüstü arkadaşlar.
        </p>

        <p className=" font-medium text-xl">2. Bengal:</p>
        <p>
          Görünüşte egzotik ve vahşi, Bengal'lerimiz çarpıcı desenlere ve canlı
          bir ruha sahiptir. Bu istisnai kedi arkadaşlarınızla evinize vahşi bir
          dokunuş katın.
        </p>

        <p className="mt-6">
          [Çiftlik Adınız] olarak, hayvanlarımızın sağlığı ve refahına öncelik
          veriyoruz. Etik üretim prensiplerine bağlılığımız, her köpeğin ve
          kedinin sevgi ve özenle büyütüldüğünden emin olur, böylece mutlu ve
          iyi sosyalleşmiş evcil hayvanlarınız olur. Websitesimizi gezin ve her
          bir tüylü arkadaşı bireysel olarak tanıma fırsatınız olsun. Herhangi
          bir sorunuz olduğunda yanıt vermeye ve yaşam tarzınıza uygun mükemmel
          arkadaşı bulmanıza rehberlik etmeye hazırız. [Çiftlik Adınız] ailesine
          hoş geldiniz - burada kuyruklar sallanır ve kalpler mırıldanır!
        </p>
      </div>
    </div>
  );
};
