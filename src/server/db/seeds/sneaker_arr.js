
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sneaker_table').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('sneaker_table').insert({
          name: 'GUCCI Ace embroidered low-top sneaker',
          price: 695.00,
          image_url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSCGy2lgSr0DUA6Jwj88jUJDv-yGJLDduExd-DW5aCjNUuePojhPJrvA6VBomfpVpkXtm8NuMw&usqp=CAE',
          description: 'Gucci GG Blooms high-top sneaker  // Our high-top sneaker in our special edition Blooms print GG Supreme canvas. Blooms print GG Supreme canvas, a material with low environmental impact, with antique rose suede detail Gucci embossed eyelets Rubber sole with embossed Gucci logo at heel Flat Made in Italy This item will be delivered in our special edition GG Blooms packaging.',
          size: 14,
          condition: 'new'
        }),
        knex('sneaker_table').insert({
          name: 'GUCCI Ace embroidered high-top-top sneaker',
          price: 690.00,
          image_url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT1wAuZLaeaxQAhN092Zwvs0djr1cGUwUqr4K98lPIcbb2S1FKGubCetRZDlvC0gD10EcquY7Y&usqp=CAY',
          description: 'Our classic low-top sneaker with an intricately designed floral embroidery that extends around the outside of the sneaker and ending with a back bow.',
          size: 10,
          condition: 'new'
        }),
        knex('sneaker_table').insert({
          name: 'Gucci Metallic leather and mink sneaker',
          price: 950.00,
          image_url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcToBsGWxZQqtokWrB_PKvaxoTOVAHe53UucovxEc6sWyO7l3fDeQBdLpqX_krRNT3IoKXFfqeJL&usqp=CAY',
          description: 'Lug sole sneaker in metallic leather with a lace-up closure and mink pom-poms. The mix of materials, colors and textures adds a new dimension to our footwear collection, allowing the shoes to impact the overall look. Gold and silver metallic leather with green and red lurex Web Women\'s Metallic silver laces with purple mink pom-poms No tongue Black rubber lug sole Made in Italy',
          size: 4.5,
          condition: 'new'
        }),
        knex('sneaker_table').insert({
          name: 'GUCCI Ace embroidered low-top sneaker',
          price: 695.00,
          image_url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSCGy2lgSr0DUA6Jwj88jUJDv-yGJLDduExd-DW5aCjNUuePojhPJrvA6VBomfpVpkXtm8NuMw&usqp=CAE',
          description: 'Gucci GG Blooms high-top sneaker  // Our high-top sneaker in our special edition Blooms print GG Supreme canvas. Blooms print GG Supreme canvas, a material with low environmental impact, with antique rose suede detail Gucci embossed eyelets Rubber sole with embossed Gucci logo at heel Flat Made in Italy This item will be delivered in our special edition GG Blooms packaging.',
          size: 8,
          condition: 'new'
        }),
        knex('sneaker_table').insert({
          name: 'Gucci Leather low-top platform sneaker',
          price: 950.00,
          image_url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQrt9CTqr1_NX02EoFFgLSEOfDe_1vfxYmn6nxt5CMmryQjutxeUbPptspjzdDC1_7SCz8bwa8&usqp=CAY',
          description: 'These metallic gold sneakers with a rainbow platform were shown on the Fall Winter runway. A striking take on the classic lace up pays homage to Gucci\'s roots with the blue/red Web. Metallic gold leather with blue/red Web stripe Red, yellow, green, blue and purple rainbow platform .5" heel height with 3.5" platform 4" total heel height Made in Italy',
          size: 12,
          condition: 'used'
        }),
        knex('sneaker_table').insert({
          name: 'Prada Men\'s Leather & Mesh Sneakers - Oltremare',
          price: 595.00,
          image_url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSnst-L-xbTnwQO5TvIflWSoYaW69eVkeUaxm_Hi6jpHk5nhs4OykA9U0Fp66Pzht8r6z4Wn9M&usqp=CAE',
          description: 'Fabulously designed shoes exude a sporty appeal. Leather/mesh upper. Lace-up closure. Leather lining. Rubber sole. Padded insole. Imported',
          size: 4,
          condition: 'new'
        }),
        knex('sneaker_table').insert({
          name: 'Leather Low Trainers Louis Vuitton Red Leather ',
          price: 4000.00,
          image_url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQeyB7lkMvYBg3Sa0uDoHehf1OEbTwKexH9qApgNKlHnPfONsQ8QSl9dbjzNux6Z48QsZWejP4&usqp=CAE',
          description: 'Leather Low Trainers Louis Vuitton Red Leather',
          size: 6,
          condition: 'new'
        }),
        knex('sneaker_table').insert({
          name: 'Louis Vuitton Damier Ebene Savan Match Up Sneaker',
          price: 1250.00,
          image_url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS2wo6qOscAEat_BQzZHW0JWDdgZorYu66UNVA3cUoCJTeq6yOFoTKWVZtqeg&usqp=CAE',
          description: 'Louis Vuitton Damier Ebene Savan Match Up Sneaker Illustre100% Authentic Very Rare Hard to find Brand New In box Ships from USASize 8 in LV BUT FITS LIKE 9-9.5The clean.',
          size: 10,
          condition: 'used'
        }),
        knex('sneaker_table').insert({
          name: 'Louis Vuitton Navy Slip On Sneakers',
          price: 1550.00,
          image_url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSzLPJHAHykIap7zay_JdoGMON809QG4D_oMki1R5k_ZO2jQVzaBO_zvQAnFIs&usqp=CAE',
          description: 'Great Condition/Authentic!! Size 6/Navy Blue. Comes with box and dust bag! I can send more pictures if needed! I will consider trades for other Louis Vuitton & Christian Louboutin items',
          size: 8,
          condition: 'new'
        }),
        knex('sneaker_table').insert({
          name: 'Louis Vuitton Women Boots',
          price: 763.33,
          image_url: ' https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRaHQfrnfpc3PDu9zttmYt0cgyXv6SC1JkmvP0zMXLlEimL2QH8U6yPO2R0QVCOehT5QVnF57Q&usqp=CAE',
          description: 'Louis Vuitton boots  //  Authentic Louis Vuitton boots. These retailed for 4,700$ plus tax. Only 5 pairs were made. Size 39. no trades  //  $2,300.00 used',
          size: 8,
          condition: 'used'
        }),
        knex('sneaker_table').insert({
          name: '35 Louis Vuitton Bahia Brazil Black Patch ',
          price: 650.00,
          image_url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTZ8OMSqiMZHSk-ldC-z2XdrYVfWoAsJJtQcKvLvTeaPaP7AiN0c46OoFX9Sl7AafQPN-Cmfzl7&usqp=CAE',
          description: 'You are viewing a pair of Authentic Louis Vuitton shoes Size 35euro Sold out nationwide! Price is above retail since I\'m subject to fees Style name: 2016 Checkpoint Desert',
          size: 12,
          condition: 'used'
        }),
        knex('sneaker_table').insert({
          name: 'Louis Vuitton Women Black Leather Boots.',
          price: 1194.03,
          image_url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcReUA6qyuPlRnIMYR2FW4uJ_QdY_iFOwB3J73rSfEmAV9O0DcEVPES3ZzWp04Q9cOPokV2ikrnD&usqp=CAE',
          description: 'Black Leather Boots Louis Vuitton Black Leather',
          size: 8,
          condition: 'new'
        }),
        knex('sneaker_table').insert({
          name: 'Alexander McQueen Sneake Pelle S.Gomma',
          price: 1940.00,
          image_url: 'http://a3.zassets.com/images/z/3/7/1/9/5/3/3719537-p-MULTIVIEW.jpg',
          description: 'Women\'s Hook and Loop Shoes Black/Multi/Red/Ivory',
          size: 6,
          condition: 'new'
        }),
        knex('sneaker_table').insert({
          name: 'Valentino Men\'s Camouflage Rockrunner Sneakers-navy',
          price: 845.00,
          image_url: 'https://product-images.barneys.com/is/image/Barneys/504592408_1_ShoeSide?$pdp_flexH$',
          description: 'Slip-resistant sneakers with stud-molded heel rim Calf leather upper Lace-up style Nylon lining Rubber sole Padded insole Made in Italy. Men\'s Shoes - Designer Shoes.',
          size: 10.5,
          condition: 'new'
        }),
        knex('sneaker_table').insert({
          name: 'Yeezy boost 350 Pirate Black',
          price: 2200.00,
          image_url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRlXel8sebFBkXU9AeE9h76jPEehmv0zjqlo6zKcG2B5ngxue5Sp6FiTZajpXIX_jaTpVoMPJE&usqp=CAE',
          description: 'The crystals are about half to a quarter of the size of our 20ss crystal and the detail is immaculate. The crystals are very small and the detail is very uniform. 7ss - This is the next size smaller than our 9/10ss crystal size. The crystals are very tiny and the detail is very pristine and the detail is crisp and uniform. It would be compared to a masterpiece.5ss - This is the smallest size crystal available. The detail is impeccable!',
          size: 9,
          condition: 'new'
        }),
        knex('sneaker_table').insert({
          name: 'Christian Louboutin Men\'s Spiked Dandelion Venetian Loafers-black',
          price: 1395.00,
          image_url: 'http://product-images.barneys.com/is/image/Barneys/504522877_1_ShoeSide?$zoom_flex$',
          description: 'Christian Louboutin United States Official Online Boutique - Dandelion Spikes Flat Black/Black Leather available online.',
          size: 13,
          condition: 'new'
        })
      ]);
    });
};
