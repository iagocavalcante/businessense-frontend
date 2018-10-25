<template>
  <div class="container">
    <div class="col-md-12 col-xs-12"> 
      <div class="row">
        <div class="col-md-3 col-xs-3">
          <h1>Tell more to us about your insights</h1>
          <hr class="about">
          <div class="col-md-3">
            <div class="new-block" style="background-color:#669999;">
              Quadrados
            </div>
          </div>
          <div>
            <p>Quadrados</p>
          </div>
        </div>
        <div class="col-md-9 col-xs-9">
          <div class="header-insights">
            <p class="pain-points">your pain points</p>
          </div>
          <hr class="about">
          <div>
            <div class="col-md-3">
              <div class="blocks" style="background-color:#669999;">
                Decreasing
                profits
                <div class="buttons">
                  <a href="" class="btn">+</a>
                  <a href="" class="btn">-</a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="blocks" style="background-color: #66CCCC;">
                Quadrados
              </div>
            </div>
            <div class="col-md-3">
              <div class="blocks" style="background-color: #66CCCC;">
                Quadrados
              </div>
            </div>
            <div class="col-md-3">
              <div class="blocks" style="background-color: #66CCCC;">
                Quadrados
                <div class="buttons">
                  <a href="" class="btn">+</a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="blocks" style="background-color: #669999;">
                Quadrados
              </div>
            </div>
            <div class="col-md-3">
              <div class="blocks" style="background-color: #333333;">
                Quadrados
              </div>
            </div>
            <div class="col-md-3">
              <div class="blocks" style="background-color: #999999;">
                Quadrados
              </div>
            </div>
            <div class="col-md-3">
              <div class="blocks" style="background-color: #66CCCC;">
                Quadrados
              </div>
            </div>
          </div>
          <div class="col-md-12 issues">
            <p>issues connected to your Pain Points</p>
            <hr class="about">
            <div>
              <div class="col-md-9 list-pain-points">
                <ul>
                  <li>Testes</li>
                  <li>Testes</li>
                  <li>Testes</li>
                  <li>Testes</li>
                  <li>Testes</li>
                  <li>Testes</li>
                  <li>Testes</li>
                  <li>Testes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Insights'
}
</script>

<style scoped>
.header-insights {
  height: 85px;;
}

.pain-points {
  padding-top: 75px;
}

.about {
  border-bottom: 1.3px solid black;
}

.blocks {
  margin-top: 20px;
  height: 90px;
  width: 180px;
  border-radius: 4px;
  padding: 10px;
}

.new-block {
  margin-top: 20px;
  height: 90px;
  width: 120px;
  border-radius: 4px;
  padding: 10px;
}

.box-center {
  display: flex;
  align-content: flex-start;
}

.buttons {
  position: absolute;
  bottom: 0;
  right: 30px;
}

.btn {
  padding: 5px;
  font-size: 18px;
}

.issues {
  padding-top: 10px;
}

.list-pain-points {
  height: 350px;
  display: flex;
}

.list-pain-points > ul {
  list-style: none;
}

.list-pain-points > ul > li {
  height: 40px;
  border: 1px solid cadetblue;
  margin: 5px;
  align-items: center;
  align-content: center;
}

</style>

