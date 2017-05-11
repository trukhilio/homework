var React = require('react');
var Item = require('./item');

var options = {
    constData:[
        {
            imageHeaderUrl: './img/banner.jpg',
            imageFooterUrl: {backgroundImage: "url(" + "./img/footer.jpg" + ")"},
            tel: '+380-55-111-11-11',
            address: 'mailto:blabla@mail.com',
            addressMail: 'blabla@mail.com',
            imagePhone: './img/phone.png',
            imageMail: './img/mail.png',
            classImage: 'footerEl__addr_image',
            classItem: 'footerEl__addr_item'
        }
    ],
    itemData:[{
        title: 'Leran more',
        imageSrc: './img/logo.jpg',
        topic: 'Cool Green Energy',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut, consectetur, consequatur doloremque dolores doloribus ducimus ea eos esse itaque laboriosam magnam neque perferendis placeat quae repellendus sit tempora voluptas.'
    },{
        title: 'Discover',
        imageSrc: './img/wind.jpg',
        topic: 'Take care of your hat! Wind is coming!',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at dolorem dolorum, enim impedit incidunt inventore libero minus modi nihil recusandae repellat, saepe soluta unde vero. Iure molestiae nobis quae quam sunt tempora voluptate! A assumenda consectetur, delectus doloremque eos fugiat id illo laudantium magnam minima neque nihil nobis odit placeat possimus quidem quisquam quos similique tempora tenetur totam voluptas voluptatibus? Consequatur cum ducimus esse fugit hic labore natus odio quasi sint tenetur! Aperiam corporis cum expedita incidunt nesciunt similique tempora? Alias aut dolores eius eum eveniet illo, inventore nihil quae quas quibusdam, recusandae sunt! Modi, odit quos. Consequuntur, iusto?'
    },{
        title: 'Find energy',
        imageSrc: './img/solar.jpg',
        topic: "Don't forget your solar cream",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi ipsum nam neque nulla perspiciatis possimus quae saepe. Accusamus alias aspernatur aut consequatur consequuntur corporis delectus deserunt dicta distinctio dolor dolore ducimus eius eligendi eos eveniet in incidunt ipsam labore, laborum magnam maiores modi nam, obcaecati optio quasi quibusdam quisquam repellat repudiandae sed sint sit soluta sunt tenetur veritatis voluptate voluptatem voluptates? Asperiores blanditiis corporis deserunt, inventore ipsum libero minus odio omnis optio quasi, quia quos, repellendus reprehenderit similique totam veniam voluptate! Ducimus eum incidunt ipsum laboriosam maxime molestias natus quasi reprehenderit rerum voluptatem? Corporis, est facilis! Accusantium alias aspernatur at commodi cupiditate delectus deleniti dolor dolorem dolorum ea earum enim error et eum excepturi fugit ipsa iste itaque labore laboriosam maxime minus molestias natus nesciunt nihil numquam omnis pariatur possimus quaerat repellat, saepe sequi tempora totam ullam veniam vero voluptates? Culpa eum illo laudantium quae quia ratione vel?'
    },{
        title: 'Green Earth',
        imageSrc: './img/earth.jpg',
        topic: 'Recycle trash! Earth will thank you!',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem blanditiis deleniti, dolorem doloremque dolores earum illum mollitia nisi, officia repudiandae temporibus veniam. Adipisci aspernatur assumenda autem cum cumque delectus distinctio dolores eius eligendi explicabo facilis, fuga illo incidunt iste labore magni modi molestias nostrum obcaecati odit officia officiis pariatur possimus provident quasi quos ratione recusandae reiciendis repudiandae rerum sed soluta tempora temporibus veniam veritatis vitae voluptatem? Blanditiis cum delectus dolor earum eligendi enim esse, facere fuga maxime quam suscipit tempore tenetur, ullam ut voluptate. Amet ex facilis iste nobis qui temporibus. Consequatur consequuntur eaque error esse est eum impedit laboriosam laudantium totam ut! Aliquid, autem culpa cupiditate debitis dolore dolorem harum ipsum iste maiores molestias nisi pariatur placeat, quis repudiandae sed sunt totam voluptate.'
    }]
};

var element = React.createElement(Item, options);
React.render(element, document.querySelector('.container'));