<template>
  <div class="NewsFeed section container">


    <div class="news-item columns is-centered ">
      <div class="feed column is-6">

        <p class="">GoFigure <br /><br /></p>
        <div class="control">
          <input class="input" type="text" placeholder="Search" v-model="searchQuery" />
        </div>

        <p class=""> <br /></p>

      </div>
    </div>

    <div class="results" v-if="filteredStats.length">

      <div class="columns is-centered" >
        <div class="column is-6">
          <h3 class="title is-5">Results</h3>
          <p class="subtitle small-sub"><small>{{filteredStats.length}} results</small></p>
        </div>
      </div>

      <div class="news-item columns is-centered" v-for="(stat, index) in filteredStats" :key="index">

        <div class="feed column is-6">
          <img :src="stat.image" v-if="stat.image" class="result-img">
            <h6 class="title is-6"><a v-bind:href="stat.url">{{stat.title}}</a></h6>
            <p class="subtitle small-sub"><small>{{stat.date}} - {{stat.source}}</small></p>
            <div class="field content">
              <span v-html="stat.formattedStat"></span>
            </div>
            <div class="buttons has-addons is-right">
              <button class="button is-small" v-clipboard:copy="stat.stat" >COPY</button>
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
    console.log('this.stats', this.stats)
  },
  data: () => ({
    avatarUrl: '/static/img/placeholder.png',
    searchQuery: ''
  }),
  computed: {
    ...mapGetters([
      'stats'
    ]),
    filteredStats: function () {
      let q = this.searchQuery.toLowerCase()
      if (!q.length) {
        return this.stats.map(x => {
          x.formattedStat = x.stat
          return x
        })
      }
      return this.stats
        .filter(x => x.stat.toLowerCase().indexOf(q) > 0)
        .map(x => {
          let y = Object.assign({}, x)
          y.formattedStat = y.stat
          y.formattedStat = y.formattedStat.replace(q, '<strong class="highlightText">' + q + '</strong>')
          return y
        })
    }
  },
  methods: {
    responseText: function (tweet) {
      let response = tweet.selectedResponse || tweet.responses[0]
      let responseText = response.text + '\n' + response.link
      return responseText
    },
    changeResponse: function (tweet, response) {
      tweet.selectedResponse = response
    }
  }
}
</script>

<style lang="scss" scoped>
.NewsFeed {
  .feed {
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
  }
}
.section.is-light {
  background: #efefef;
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
  color: #efefef;
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
.small-sub {
  font-size: 0.9em;
}
.result-img {
  margin: -10px -1.51em 10px -1.51em;
  width: calc(100% + 3em);
  border-bottom: 1px solid #eee;
  max-width: 130%;
}
.highlightText {
  font-weight: 900 !important;
}
</style>
