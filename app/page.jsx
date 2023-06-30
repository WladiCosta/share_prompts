import React from 'react'
import Feed from '@components/Feed'; '@components/Feed'

function Home() {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>Descubra & Compartilhe
            <br className='max-md:hidden'/>
            <span className='orange_gradient text-center'>Poderosos A.I-Prompts</span>
        </h1>
        <p className='desc text-center'>
            Promptopia é uma ferramenta de IA-Prompt de código aberto para descobrir o mundo moderno, criar e compartilhar prompts criativos
        </p>
        
        {<Feed />}
    </section>
  )
}

export default Home;