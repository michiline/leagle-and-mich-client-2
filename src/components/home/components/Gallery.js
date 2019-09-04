import React, { Component } from 'react'
import axios from 'axios'
import styled, { css } from 'styled-components'
import justifiedLayout from 'justified-layout'

class Gallery extends Component {
  state = {
    images: []
  }
  render () {
    return (
      <Container>
        <Header>Travel Gallery</Header>
        <GalleryContainer>
          {this.state.images && this.state.images.length !== 0 && this.renderImages(this.state.images)}
        </GalleryContainer>
      </Container>
    )
  }

  async componentDidMount() {
    const ratios = await getRatios({ url: 'soca' })
    const images = getImages({ url: '/travels/soca', length: ratios.data.length })
    this.setState({ images })
    try {
      const rowHeight = window.innerWidth > 800 ? window.innerWidth / 7 : window.innerWidth / 5
      window.$('#gallery').justifiedGallery({ rowHeight: rowHeight })
    } catch (err) {
      console.log(err)
    }
  }

  renderImages = (images) => images.map((image, index) => {
    return (
      <A img={image} key={index}>
        <Image img={image} />
      </A>
    )
  })
}

const Container = styled.div`
  display: grid;
  grid-template-rows: min-content min-content;
  justify-items: center;
  align-items: center;
  color: #303336;
  width: 100%;
  padding: calc(1rem + 2.5vw) 5vw 5vw 5vw;
`

const Header = styled.p`
  font-size: calc(2rem + 1.5vw);
  letter-spacing: 0.1vw;
  line-height: 1.2;
  font-family: 'Playfair Display';
  margin-bottom: calc(1rem + 2.5vw);
`

const GalleryContainer = styled.div.attrs({
  id: 'gallery'
  })
`

`

const Image = styled.img.attrs(props => ({
  src: props.img.src,
  alt: props.img.alt
  }))`
`

const A = styled.a.attrs(props => ({
  href: props.img.src
}))``

const getImages = ({ url, length}) => [...Array(length)].map((img, index) => {return { id: index, alt: 'Image', src: `http://localhost:3000/images/${url}/${index + 1}.jpg` }})

const getRatios = ({ url }) => axios({
  method: 'get',
  url: `http://localhost:3000/sizes/${url}`
})

export default Gallery