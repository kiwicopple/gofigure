<template>
  <div class="NewsFeed section container">


    <!-- <div class="news-item columns is-centered">
      <div class="feed column is-6">
        <h3 class="title is-5">Trending topics</h3>

        <a class="tag is-rounded is-info" v-for="(tag, index) in tags" :key="'tag' + index" @click="changeHashtag(tag)">{{tag.hashtag}}</a>

        <div class="" v-for="(tag, index) in tags" :key="'tagr' + index">
          <div class="field tag-response-options" v-show="tag.hashtag === getSelectedHashtag()">
            <span class="buttons has-addons">
              <button
                class="button is-small"
                name="button"
                v-for="(response, index) in tag.responses"
                :key="'r' + index"
                @click="changeTagResponse(tag, response)"
              >
                {{index + 1}}
              </button>
            </span>
          </div>
        </div>
        <div class="trending-responses">
          <div class="media">
            <div class="media-left">
              <figure class="image is-avatar is-48x48">
                <img :src="avatarUrl">
              </figure>
            </div>
            <div class="media-content">
              <div class="control">
                <textarea class="textarea" placeholder="Update" name="notes">{{updateText()}}</textarea>
              </div>
            </div>
          </div>
          <div class="field has-text-right">
            <button class="button is-link is-rounded" name="button">
              <span class="icon">
                <i class="fab fa-facebook-f"></i>
              </span>
            </button>
            <button class="button is-link is-rounded" name="button">
              <span class="icon">
                <i class="fab fa-linkedin-in"></i>
              </span>
            </button>
            <button class="button is-info is-rounded" name="button">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
            </button>
          </div>
        </div>

      </div>
    </div> -->

    <div class="columns is-centered">
      <div class="column is-6">
        <h3 class="title is-5">Trending Topics</h3>
      </div>
    </div>

    <div class="news-item columns is-centered" v-for="(tweet, index) in tweets" :key="index">

      <div class="feed column is-6">

        <div class="social-update">
          <div class="media">
            <div class="media-left">
              <figure class="image is-avatar is-48x48">
                <img :src="tweet.authorAvatar" :alt="tweet.author">
              </figure>
            </div>
            <div class="media-content">
              <p class="twitter-header">
                <strong>{{tweet.author}}</strong>
                <span class="meta light-grey"> <time datetime="2016-1-1">· {{tweet.time}}</time></span>
              </p>
              <p class="">{{tweet.text}}</p>
            </div>
          </div>
        </div>

        <div class="card social-attachment">
          <div class="card-image">
            <figure class="image is-16by9">
              <img :src="tweet.attachment.imageUrl" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <h6 class="title is-6">{{tweet.attachment.title}}</h6>
              <p>
                {{tweet.attachment.text}}
              </p>
              <p class="light-grey">
                {{tweet.attachment.source}}
              </p>
            </div>
          </div>
        </div>

        <div class="response">
          <div class="field response-options">
            <span class="buttons has-addons">
              <button
                class="button is-small"
                name="button"
                v-for="(response, index) in tweet.responses"
                :key="'r' + index"
                @click="changeResponse(tweet, response)"
              >
                {{index + 1}}
              </button>
            </span>
          </div>
          <div class="field">
            <div class="control">
              <textarea class="textarea" placeholder="Send us a message" name="notes">{{responseText(tweet)}}</textarea>
            </div>
          </div>
          <div class="field has-text-right">
            <button class="button is-link is-rounded" name="button">
              <span class="icon">
                <i class="fab fa-facebook-f"></i>
              </span>
            </button>
            <button class="button is-link is-rounded" name="button">
              <span class="icon">
                <i class="fab fa-linkedin-in"></i>
              </span>
            </button>
            <button class="button is-info is-rounded" name="button">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
            </button>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  props: [],
  components: {
  },
  mounted: () => {
    // console.log('this.category', this.$route.params.category)
  },
  data: () => ({
    avatarUrl: '/static/img/placeholder.png',
    statusUpdate: '',
    selectedHashtag: '',
    tags: [
      {
        hashtag: '#renewable',
        selectedResponse: null,
        responses: [
          {
            text: '41% of respondents say subsidies are the most important measure for driving investment in renewables',
            link: 'https://gofigu.re/349asj8'
          },
          {
            text: 'The world\'s energy mix continues to turn green, with the addition of almost 165GW of renewable generating capacity in 2016.',
            link: 'https://gofigu.re/349asj8'
          },
          {
            text: 'An estimated 6,392TWh of power was generated by renewables in 2017 and this looks set to grow, with global renewableselectricy generation expected to increase to over 8,000TWh by 2022.',
            link: 'https://gofigu.re/349asj8'
          }
        ]
      },
      {
        hashtag: '#oil',
        selectedResponse: null,
        responses: [
          {
            text: 'text',
            link: 'https://gofigu.re/349asj8'
          },
          {
            text: 'text',
            link: 'https://gofigu.re/349asj8'
          }
        ]
      }
    ],
    tweets: [
      {
        author: 'Tim Rockell',
        authorAvatar: 'https://i.imgur.com/FXSUyqo.jpg',
        authorHandle: '@TimRockell',
        time: 'Apr 5',
        text: '41% of respondents say subsidies are the most important measure for driving investment in renewables',
        attachment: {
          imageUrl: 'https://i.imgur.com/W1qAxrv.jpg',
          title: 'In March, Portugal Made More Than Enough Renewable Energy to Power The Whole Country',
          text: 'The country produced renewable power equal to 103.6 percent of mainland Portugal\'s electrical demand - a feat unmatched in the last 40 years.',
          source: 'npr.org'
        },
        selectedResponse: null,
        responses: [
          {
            text: '41% of respondents say subsidies are the most important measure for driving investment in renewables',
            link: 'https://gofigu.re/349asj8'
          },
          {
            text: 'The world\'s energy mix continues to turn green, with the addition of almost 165GW of renewable generating capacity in 2016.',
            link: 'https://gofigu.re/349asj8'
          },
          {
            text: 'An estimated 6,392TWh of power was generated by renewables in 2017 and this looks set to grow, with global renewableselectricy generation expected to increase to over 8,000TWh by 2022.',
            link: 'https://gofigu.re/349asj8'
          }
        ]
      },
      {
        author: 'Tim Rockell',
        authorAvatar: 'https://i.imgur.com/FXSUyqo.jpg',
        authorHandle: '@TimRockell',
        time: 'Apr 5',
        text: 'Right now, India\'s total renewable capacity is around 42GW of installed capacity and that accounts for between 6 to 7 percent of the energy currently going into the grid.',
        attachment: {
          imageUrl: 'https://i.imgur.com/EtDIxGm.jpg',
          title: 'If China builds your damns, India won\t buy energy.',
          text: 'One particular dam project, the $2.5-billion Budhi Gandaki project, on a river by the same name in central-western Nepal, is increasingly becoming...',
          source: 'indiaexpress.com'
        },
        selectedResponse: null,
        responses: [
          {
            text: 'Right now, India\'s total renewable capacity is around 42GW of installed capacity and that accounts for between 6 to 7 percent of the energy currently going into the grid.',
            link: 'https://gofigu.re/349asj8'
          },
          {
            text: 'In India, there are around 18,000 villages that are not electrified and about 3,500 of those cannot be connected to the grid, eiter due to cost or practicality.',
            link: 'https://gofigu.re/349asj8'
          },
          {
            text: 'Policies in India have changed significantly and there are essentially no restrictions and no entry barriers with the opportunity to maintain 100 percent ownership (FDI) in renewables.',
            link: 'https://gofigu.re/349asj8'
          }
        ]
      }
    ]
  }),
  computed: {
    ...mapGetters([
    ])
  },
  methods: {
    responseText: function (tweet) {
      let response = tweet.selectedResponse || tweet.responses[0]
      let responseText = response.text + '\n' + response.link
      return responseText
    },
    changeResponse: function (tweet, response) {
      tweet.selectedResponse = response
    },
    updateText: function () {
      return this.statusUpdate || this.tags[0].responses[0].text + '\n' + this.tags[0].hashtag
    },
    changeTagResponse: function (tag, response) {
      this.statusUpdate = response.text + '\n' + tag.hashtag
    },
    changeHashtag: function (tag) {
      this.selectedHashtag = tag.hashtag
      this.statusUpdate = tag.responses[0].text + '\n' + tag.hashtag
    },
    getSelectedHashtag: function () {
      return this.selectedHashtag || this.tags[0].hashtag
    }
  }
}
</script>

<style lang="scss" scoped>
.NewsFeed {
  .feed {
    background: #fff;
    border-radius: 4px;
  }
}
.section.is-light {
  background: #ededed;
}
.news-item  {
  margin-bottom: 30px;
}
.media-content {
  overflow: visible;
  p, strong, span, time {
    font-size: 12px !important;
  }
}
.light-grey {
  color: #bebebe;
}
.twitter-header {
  .meta {
  }
}
.tag-response-options {
  margin-top: 15px;
}
.social-attachment {
  margin-top: 20px;
  .card-content {
    padding: 10px;
    h6 {
      font-size: 12px;
      font-weight: bold;
      margin: 0px;
    }
    p {
      font-size: 12px;
      margin: 0px;
    }
  }
}
.response {
  margin-top: 30px;
}
.trending-responses {
  margin: 15px 0;
  .media {
    margin-bottom: 15px;
  }
}
.tag {
  margin-right: 5px;
}
@media (min-width: 669px) {
  .NewsFeed {
    padding-left: 0px;
    padding-right: 0px;
  }
  .news-item .column {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>
