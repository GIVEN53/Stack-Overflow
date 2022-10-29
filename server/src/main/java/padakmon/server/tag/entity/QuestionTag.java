package padakmon.server.tag.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import padakmon.server.question.entity.Question;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class QuestionTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionTagId;
    @ManyToOne
    @JoinColumn(name = "TAG_ID")
    private Tag tag;
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;
}
