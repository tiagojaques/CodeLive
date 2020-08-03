import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain/index';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriaComVideos) => {
        console.log(categoriaComVideos);
        // return false;
        setDadosIniciais(categoriaComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div style={{ background: '#141414' }}>
      <PageDefault paddingAll={0}>
        {dadosIniciais.length === 0 && (<div>Loading...</div>)}
        {dadosIniciais.length >= 1 && (
          <>
            <BannerMain
              videoTitle={dadosIniciais[0].videos[0].titulo}
              url={dadosIniciais[0].videos[0].url}
              videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
            />
            {
              dadosIniciais.map((item, i) => <Carousel ignoreFirstVideo key={i} category={item} />)
            }
          </>
        )}
      </PageDefault>
    </div>
  );
}

export default Home;
