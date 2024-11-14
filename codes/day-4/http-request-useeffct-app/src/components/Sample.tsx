import { Component, ReactNode } from "react";
import { Todo } from "../models/todo";
import { getTodos } from "../services/todoservice";

type SamplePropType = {
    data: number
}
type SampleStateType = {
    value: number,
    todos: Todo[] | undefined,
    isDataFetchingOver: boolean,
    errorMessage: string
}
export class Sample extends Component<SamplePropType, SampleStateType> {

    constructor(props: SamplePropType) {
        super(props)
        // this.state = {
        // value: 10,
        //  todos: undefined,
        //  errorMessage: '',
        //  isDataFetchingOver: false
        // }
        console.log('sample created');
    }
    state: Readonly<SampleStateType> = {
        value: 10,
        todos: undefined,
        errorMessage: '',
        isDataFetchingOver: false
    }

    valueHandler = () => {
        // this.setState({
        //     value: 200
        // })
        this.setState(
            (oldState) => {
                return {
                    value: oldState.value + 1
                }
            }
        )
    }

    componentDidMount(): void {
        console.log('after mounting...');
        //this.fetchTodos()
    }
    componentDidUpdate(prevProps: Readonly<SamplePropType>, prevState: Readonly<SampleStateType>, snapshot?: any): void {
        console.log('after update....');
        if (prevState.todos === undefined) {
            this.fetchTodos()
            //closure of resource
        }
    }
    componentWillUnmount(): void {
        //resource cleaning
    }
    render(): ReactNode {
        console.log('sample rendered...');

        const { isDataFetchingOver, errorMessage, todos } = this.state
        let design: any;
        if (isDataFetchingOver) {
            if (errorMessage === '') {
                if (todos && todos.length > 0) {
                    design = (
                        <ul>
                            {
                                todos.map(
                                    (todod) => <li key={todod.id}>{todod.id}. {todod.title}</li>
                                )
                            }
                        </ul>
                    )
                } else
                    design = <span>No record found...</span>
            } else
                design = <span>{errorMessage}</span>
        } else
            design = <span>Loading....</span>


        return (
            <div>
                <span>Value: &nbsp; {this.state.value}</span>
                <br />
                <span>Data: &nbsp;{this.props.data}</span>
                <br />
                <button type="button" onClick={this.valueHandler}>Increase Value</button>
                <br />
                {
                    design
                }
            </div>
        )
    }

    fetchTodos = async () => {
        try {
            const response = await getTodos()
            if (response.status === 200) {
                this.setState({
                    todos: response.data.slice(0, 5),
                    isDataFetchingOver: true,
                    errorMessage: ''
                })
            } else {
                this.setState({
                    todos: undefined,
                    isDataFetchingOver: true,
                    errorMessage: 'could not fetch records'
                })
            }
        } catch (error: any) {
            this.setState({
                todos: undefined,
                isDataFetchingOver: true,
                errorMessage: error.message
            })
        }
    }
}