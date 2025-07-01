pipeline {
  agent any

  tools {
    nodejs 'node18'
  }

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Install Playwright Browsers') {
      steps {
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npx playwright test'
      }
    }

    stage('Generate Allure Report') {
      steps {
        sh 'npx allure generate ./allure-results --clean -o ./allure-report'
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
