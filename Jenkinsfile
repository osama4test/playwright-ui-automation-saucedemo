pipeline {
  agent any

  tools {
    nodejs 'node18' // Make sure this is configured in Jenkins under Global Tool Configuration
  }

  environment {
    BASE_URL = 'https://www.saucedemo.com'
    TEST_USER = 'standard_user'
    TEST_PASS = 'secret_sauce'
  }

  stages {
    stage('Install Dependencies') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Install Playwright Browsers') {
      steps {
        bat 'npx playwright install'
      }
    }

    stage('Run Tests') {
      steps {
        bat 'npx playwright test'
      }
    }

    stage('Generate Allure Report') {
      steps {
        bat 'npx allure generate ./allure-results --clean -o ./allure-report'
      }
    }

    stage('Publish HTML Report') {
      steps {
        publishHTML(target: [
          reportDir: 'allure-report',
          reportFiles: 'index.html',
          reportName: 'Allure Report'
        ])
      }
    }
  }

  post {
    always {
      cleanWs()
    }
  }
}
