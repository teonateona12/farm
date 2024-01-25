import React from "react";
import Farm from "../assets/farm.jpg";
import Dog1 from "../assets/dog1.jpg";
import Dog2 from "../assets/dog2.jpg";
import Cat from "../assets/cat.jpg";
import Cat1 from "../assets/cat1.jpg";

export const Home = () => {
  return (
    <div className="mt-10">
      <h1 className=" text-3xl text-center mb-6 text-red-800">
        Funny Dog Farm
      </h1>
      <p className="mt-7">
        Funny dog farm’da hoş geldiniz😊 yerimiz Kemalpaşa , çiftliğimizde 200e
        kadar hayvanlarımız vardır 😍 köpeklerimizin tüm aşılarını yapılmış, en
        iyi şekilde hizmet vermekteyiz 🙂 Bizimle iletişime geçebilirsiniz
        Whatsapp- 05432960902 Instagram- funnydogfarm35 <br />
        <br />
      </p>
      <div className="md:flex gap-8">
        <img className="rounded-sm md:w-[30%]" src={Farm} />
        <div>
          <h1 className=" text-xl text-center mt-4  md:mt-20 mb-2 text-red-800">
            Funny Dog Farm
          </h1>
          <p className=" md:w-[600px]">
            Kişilik olarak incelendiğinde St. Bernard uysal, nazik, arkadaş
            canlısı, sevgi dolu ve sabırlıdır. Saint Bernard yavaş hareket eden,
            sabırlı ve itaatkâr bir köpektir. Tek kötü huyu çok salyalı
            olmasıdır. Arama köpeği, bekçi köpeği, iz sürücü ve kurtarma köpeği
            olarak kullanılır.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-32 md:mt-0 ">
        <div className="order-2 md:order-1">
          <h1 className=" text-xl text-center mt-4  md:mt-20 mb-2 text-red-800">
            Funny Dog Farm
          </h1>
          <p className="md:w-[600px]  ">
            Maltipoo, Maltese ve Toy Poodle ırklarının çaprazlanmasıyla ortaya
            çıkan melez bir köpektir. MaltePoo, MultaPoo, MaltiDoodle gibi
            isimlerle de tanınırlar. Maltipoo köpekleri Amerikan Kanin Hibrit
            Kulübü tarafından tescillenmiş olsalar da Amerikan Kennel Kulübü
            tarafından henüz tescillenmemiştir. Sevimli halleri, oyun sever
            yapısı ve ailesine olan bağlılığı ile dikkat çekerler. Küçük köpek
            ırkları arasındadır ve kucak köpeği olarak da ünlenmişlerdir.
            İnsanlar, çocuklar ve hayvanlarla genel olarak iyi anlaşan,
            sıcakkanlı yapıya sahip olan mükemmel bir aile köpeğidir.
          </p>
        </div>
        <img className="rounded-sm md:w-[30%] order-1 md:order-2" src={Dog1} />
      </div>

      <div className="md:flex gap-8 mt-32 md:mt-0">
        <img className="rounded-sm md:w-[30%]" src={Dog2} />
        <div>
          <h1 className=" text-xl text-center mt-4  md:mt-20 mb-2 text-red-800">
            Funny Dog Farm
          </h1>
          <p className=" md:w-[600px] ">
            * Enerji düzeyleri yüksektir. * Egzersiz ihtiyaçları çok fazla
            yoktur. * Başka köpeklerle pek geçinemezler. * Diğer yavru
            hayvanlarla geçinme düzeyi orta derecededir. * Çocuklarla çok iyi
            anlaşırlar. * Yabancılara karşı mesafelidirler. * Orta düzey
            eğitilebilir olan bu köpeklerin koruyuculuklar düşüktür.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-32 md:mt-0">
        <div className=" order-2 md:order-1">
          <h1 className=" text-xl text-center mt-4  md:mt-20 mb-2 text-red-800">
            Funny Dog Farm
          </h1>
          <p className=" md:w-[600px] ">
            Görünümlerinin vahşi olmasının aksine Bengal kedileri oldukça uysal,
            sevecen ve sakin yapılı bir kedi ırkıdır. Bu kedi ırkı çocuklu
            aileler için önerilen evcil hayvanlar arasında yer alır.
          </p>
        </div>
        <img className="rounded-sm md:w-[30%] order-1 md:order-2" src={Cat} />
      </div>

      <div className="md:flex gap-8 mt-32 md:mt-0">
        <img className="rounded-sm md:w-[30%]" src={Cat1} />
        <div>
          <h1 className=" text-xl text-center mt-4  md:mt-20 mb-2 text-red-800">
            Funny Dog Farm
          </h1>
          <p className=" md:w-[600px] ">
            • Hizli bir sekilde ögrenebilmeleri, kisa sürede egitime yatkinlik
            sagliyor. • Kucaga alinmak, öpülmek ve oksanmak onlar için sorun
            degildir. • Kalitsal bir hastaliklari yoktur, evcil kedilerin en
            sagliklisi olarak bilinirler. • Diger kedilerin aksine Savannah
            kedisi suyu sever.
          </p>
        </div>
      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
};
