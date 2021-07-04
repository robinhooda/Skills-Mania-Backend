const quizArr = [
  {
    id: 'ebdd93a2-97a3-4ef5-b8db-0e50e2831977',
    name: "HTML",
    coverImageUrl:
      'https://svgshare.com/i/YvK.svg',
    totalScore: 20,
    questions: [
      {
        id: '0200aa14-5d75-4a66-8b1b-85d516e504ce',
        question:
          "1. A webpage displays a picture. What tag was used to display that picture?",
        points: 4,
        negativePoints: 1,
        options: [
          {
            id: 'f098b3d8-0080-40d0-bb34-7be85310a06f',
            content: 'src',
            isAnswer: false,
          },
          {
            id: '9f4d88cf-6bf1-45d9-a75d-442f882310cd',
            content: 'image',
            isAnswer: false,
          },
          {
            id: '9f4d88cf-6bf1-45d9-a75d-442f882318cd',
            content: 'img',
            isAnswer: true,
          },
        ],
      },
      {
        id: '590f528f-d485-49d1-b009-cd899cbe83c0',
        question: 'How can you make an e-mail link?',
        points: 4,
        negativePoints: 1,
        options: [
          {
            id: 'b73e3c48-cd6f-48c8-a0d5-2a98b83afe58',
            content: '<a href=”xxx@yyy ”>',
            isAnswer: false,
          },
          {
            id: '4b5231dd-4e84-4d2a-bb8c-3cc88474fb07',
            content: '<mail href=”xxx@yyy ”>',
            isAnswer: false,
          },
          {
            id: 'f55774b0-c50b-4ea5-b610-5578845fd6b3',
            content: '<a href=”mailto:xxx@yyy ”>',
            isAnswer: true,
          },
        ],
      },
      {
        id: '2bb770b4-fc78-4d42-aa0c-924c7f17d02e',
        question:
          'What does vlink attribute mean?',
        points: 4,
        negativePoints: 1,
        options: [
          {
            id: '6550799e-232a-4d64-8a6d-22f5665e0409',
            content: 'visited link',
            isAnswer: true,
          },
          {
            id: 'cb5b38ca-8036-48e1-8ebd-58be67a11521',
            content: 'active link',
            isAnswer: false,
          },
          {
            id: '30d6b3ac-09e4-4be8-b1c5-bdb3df7b4e58',
            content: 'virtual link',
            isAnswer: false,
          },
        ],
      },
      {
        id: '75ed805c-1849-49ba-9a47-5de5a8418d26',
        question:
          'Which of the following is valid IP address?',
        points: 4,
        negativePoints: 1,
        options: [
          {
            id: '91d7fb9a-993c-4e3a-acfb-df6372fq5d1a',
            content: "192.168.56.115",
            isAnswer: true,
          },
          {
            id: '61c7fb9a-993c-4e3a-acfb-df6372f15d7f',
            content: '192.168.321.10',
            isAnswer: false,
          },
          {
            id: 'e33f56cd-7c54-464a-bc9d-78f65578d2bc',
            content: '1.888.234.3456',
            isAnswer: false,
          },
        ],
      },
      {
        id: 'eadc854f-5d80-4f7b-a3f2-44f39deab200',
        question:
          'What is the correct syntax in HTML for creating a link on a webpage?',
        points: 4,
        negativePoints: 1,
        options: [
          {
            id: '9278cb36-320b-48c8-963f-7d7a3e036db4',
            content: '<a src= "abcd.html" >',
            isAnswer: false,
          },
          {
            id: '605524ec-00b4-4101-acca-900c87c09a25',
            content: '<a href= "abcd.html">',
            isAnswer: true,
          },
          {
            id: '7dd74db4-b71e-4404-87e8-eec35685d3b4',
            content: '<link src= "abcd.html">',
            isAnswer: false,
          },
        ],
      },
    ],
  },
  {
    id: 'fffa23a7-4d8c-4f09-8a63-5e1bc63ee7ec',
    name: 'CSS',
    coverImageUrl:
      'https://svgshare.com/i/Yv7.svg',
    totalScore: 20,
    questions: [
      {
        id: '04c98537-9d22-4bec-83b7-ad4784162b1a',
        question: 'Which of the following CSS property is used to set the background image of an element?',
        points: 4,
        negativePoints: 1,
        options: [
          {
            id: 'b829351e-9f55-4abd-a1d7-aa7a35404ce9',
            content: 'background-attachment',
            isAnswer: false,
          },
          {
            id: 'b45aa490-5a5f-41a3-8177-cca8b64b172e',
            content: 'background-image',
            isAnswer: true,
          },
          {
            id: 'a2b0c1d2-4f4f-4eef-9279-1a2ac7549700',
            content: 'None of the above',
            isAnswer: false,
          },
        ],
      },
      {
        id: 'bee89d5a-8f2f-43b9-b879-02f1cdb8937d',
        question: 'Which of the following is the correct syntax to display the hyperlinks without any underline?',
        points: 4,
        negativePoints: 1,
        options: [
          {
            id: '84cdb660-60e1-44de-b0ad-43d7a3ebfak1',
            content: 'a {decoration : no-underline;}',
            isAnswer: false,
          },
          {
            id: '11hcf660-60e1-44de-b0ad-43d7a3ebfoo8',
            content: 'a {text-decoration : underline;}',
            isAnswer: false,
          },
          {
            id: '34cdb860-60e1-44de-b0ad-43d7a3ebfed8',
            content: 'a {text-decoration : none;}',
            isAnswer: true,
          },
        ],
      },
      {
        id: '2722ecd0-2d54-4836-8284-76fde5abe7d0',
        question: 'Are the negative values allowed in padding property?',
        points: 4,
        negativePoints: 1,
        options: [
          {
            id: '6377d841-c842-444a-b473-352578228ea7',
            content: 'Yes',
            isAnswer: false,
          },
          {
            id: '046e10c2-bca0-4f1e-940a-e5f225d0d374',
            content: 'May be',
            isAnswer: false,
          },
          {
            id: '7108c1aa-3398-48c5-be3c-d7fda8b80444',
            content: 'No',
            isAnswer: true,
          },
        ],
      },
      {
        id: '2a15eafe-8c11-40f1-89ab-3b8f55104e7a',
        question:
          'The CSS property used to specify the transparency of an element is -',
        points: 4,
        negativePoints: 1,
        options: [
          {
            id: 'd793b38e-9bc8-4421-be70-6fa2ded81933',
            content: 'filter',
            isAnswer: false,
          },
          {
            id: '289c2daa-469e-4f19-b27b-df6aa000f30e',
            content: 'visibility',
            isAnswer: false,
          },
          {
            id: '4ac36f5c-2bdd-4d1c-a2b2-60842f62ebd9',
            content: 'opacity',
            isAnswer: true,
          },
        ],
      },
      {
        id: '1af0ab03-c699-4043-9967-7bbf930a9e39',
        question:
          'Which of the following CSS property is used to specify the space between every letter inside an element?',
        points: 4,
        negativePoints: 1,
        options: [
          {
            id: '16bad4f8-d48f-41b5-a165-9aa6f5eff54e',
            content: 'letter-spacing',
            isAnswer: true,
          },
          {
            id: '2143d30a-0066-4f98-ae4f-bfc740171ef9',
            content: 'character-spacing',
            isAnswer: false,
          },
          {
            id: '3003f123-7994-4994-ae8f-79630d91761a',
            content: 'alphabet-spacing',
            isAnswer: false,
          },
        ],
      },
    ],
  },
  {
    id: 'ebdd93a2-97a3-4ef5-b8db-0e50e2831967',
    name: "Javascript",
    coverImageUrl:
      'https://svgshare.com/i/Yvc.svg',
    totalScore: 20,
    questions: [
      {
        id: '0200aa14-5d75-4a66-8b1b-85d516e504ce',
        question:
          " Which type of JavaScript language is ___",
        points: 4,
        negativePoints: 1,
        options: [
          {
            id: 'f098b3d8-0080-40d0-bb34-7be85310a06f',
            content: 'Object-Oriented',
            isAnswer: false,
          },
          {
            id: '9f4d88cf-6bf1-45d9-a75d-442f882310cd',
            content: 'Object-Based',
            isAnswer: true,
          },
          {
            id: '9aad88cf-6bf1-45d9-a75d-442f882318cd',
            content: 'High-level',
            isAnswer: false,
          },
          {
            id: '6kn4d88cf-6bf1-45d9-a75d-442f882318cd',
            content: 'Assembly-Language',
            isAnswer: false,
          },
        ],
      },
      {
        id: '590f528f-d485-49d1-b009-cd899cbe83c0',
        question: 'Which of the following number object function returns the value of the number?',
        points: 4,
        negativePoints: 1,
        options: [
          {
            id: 'b73e3c48-cd6f-48c8-a0d5-2a98b83afe58',
            content: 'toString()',
            isAnswer: false,
          },
          {
            id: '4b5231dd-4e84-4d2a-bb8c-3cc88474fb07',
            content: 'valueOf()',
            isAnswer: true,
          },
          {
            id: 'f55774b0-c50b-4ea5-b610-5578845fd6b3',
            content: 'toLocaleString()',
            isAnswer: false,
          },
          {
            id: '855231dd-4e84-4d2a-bb8c-3cc88474fb07',
            content: 'toPrecision()',
            isAnswer: false,
          },
        ],
      },
      {
        id: '2bb770b4-fc78-4d42-aa0c-924c7f17d02e',
        question:
          'Which one of the following operator is used to check weather a specific property exists or not:',
        points: 4,
        negativePoints: 1,
        options: [
          {
            id: '6550799e-232a-4d64-8a6d-22f5665e0409',
            content: 'Exists',
            isAnswer: false,
          },
          {
            id: 'cb5b38ca-8036-48e1-8ebd-58be67a11521',
            content: 'exist',
            isAnswer: false,
          },
          {
            id: '30d6b3ac-09e4-4be8-b1c5-bdb3df7b4e58',
            content: 'in',
            isAnswer: true,
          },
          {
            id: '78abb3ac-09e4-4be8-b1c5-bdb3df7b4e58',
            content: 'within',
            isAnswer: false,
          },
        ],
      },
      {
        id: '75ed805c-1849-49ba-9a47-5de5a8418d26',
        question:
          'Which one of the following method or operator is used for identification of the array?',
        points: 4,
        negativePoints: 1,
        options: [
          {
            id: 'acd08455-898c-4a35-8b10-5f633ebbf79a',
            content: "Typeof",
            isAnswer: false,
          },
          {
            id: '61c7fb9a-993c-4e3a-acfb-df6372f15d7f',
            content: '==',
            isAnswer: false,
          },
          {
            id: 'e33f56cd-7c54-464a-bc9d-78f65578d2bc',
            content: '===',
            isAnswer: false,
          },
          {
            id: '89abhgcd-7c54-464a-bc9d-78f65578d2bc',
            content: 'isarrayType()',
            isAnswer: true,
          },
        ],
      },
      {
        id: 'eadc854f-5d80-4f7b-a3f2-44f39deab200',
        question:
          'What is the primary role of the "return ()" statement in a function body?',
        points: 4,
        negativePoints: 1,
        options: [
          {
            id: '9278cb36-320b-48c8-963f-7d7a3e036db4',
            content: 'It returns the value and continues executing rest of the statements',
            isAnswer: false,
          },
          {
            id: '605524ec-00b4-4101-acca-900c87c09a25',
            content: 'It returns the value and stops the program execution',
            isAnswer: false,
          },
          {
            id: '7dd74db4-b71e-4404-87e8-eec35685d3b4',
            content: 'It returns the value and stops executing the function',
            isAnswer: true,
          },
          {
            id: '11vskdb4-b71e-4404-87e8-eec35685d3b4',
            content: 'Stops executing the function and returns the value',
            isAnswer: false,
          },
        ],
      },
    ]
  },
]

module.exports = quizArr
