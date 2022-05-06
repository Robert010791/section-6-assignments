const { Builder, Capabilities } = require('selenium-webdriver');

const { By } = require('selenium-webdriver');

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get('http://127.0.0.1:5500/movieList/index.html');
});

// afterAll(async () => {
//   await driver.quit();
// });

it('Can add a movie to the movie list', async () => {
  let searchBar = await driver.findElement(By.xpath('//input'));

  await searchBar.sendKeys('Star Wars, Revenge of the Sith\n');
  await searchBar.sendKeys('The Big Lebowski\n');
  await searchBar.sendKeys('The Shawshank Redemption\n');
  await searchBar.sendKeys('The Dark Knight \n');

  await driver.sleep(1000);

  await driver.findElement(By.id('TheDarkKnight')).click();

  await driver.sleep(1000);

  await driver.findElement(By.xpath('//ul/li/span')).click();
});
