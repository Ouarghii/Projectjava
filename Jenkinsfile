pipeline {
    agent any
    tools {
        maven 'maven_3.9.4'
    }
    stages {
        stage("build jar") {
            steps {
                echo 'building the application ..'
                sh 'mvn package'
            }
        }

        stage("build image") {
            steps {
                echo 'building docker image ..'
                withCredentials([usernamePassword(credentialsId:'Ras',passwordVariable: 'warghui110',usernameVariable: 'Raslen')]) {
                    sh 'docker build -t Ouarghii/Projectjava .'
                    sh "echo \$warghui110 | docker login -u \$Raslen --password-stdin"
                    sh 'docker push Ouarghii/Projectjava'
                }
            }
        }

        stage("test") {
            steps {
                echo 'testing the application ..'
            }
        }

        stage("deploy") {
            steps {
                echo 'deploying the application ..'
            }
        }
    }
}

node {
    //groovy script
}

